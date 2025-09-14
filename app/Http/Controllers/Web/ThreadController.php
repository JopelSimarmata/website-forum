<?php

namespace App\Http\Controllers\Web;

use App\Models\Tag;
use App\Models\User;
use App\Models\Thread;
use App\Models\Comment;
use App\Http\Controllers\Controller;
use App\Http\Resources\Thread\ThreadResource;
use App\Http\Resources\Thread\ThreadsResource;

class ThreadController extends Controller
{
    public function index()
    {
        // get all threads data
        $threads = Thread::query()
            ->with('tags', 'user')
            ->withTotalVisitCount()
            ->withCount('comments')
            ->latest()
            ->search()
            ->status()
            ->paginate(6)->withQueryString();

        // get count users data
        $users_count = User::count();

        // get count thread resovled data
        $resolved_count = Thread::query()
            ->where('status', 'resolved')
            ->count();

        // get count threads data
        $threads_count = Thread::count();

        // get tags data
        $tags = Tag::query()
            ->withCount('threads')
            ->orderBy('threads_count', 'desc')
            ->get();

        //render view
        return inertia('Web/Threads/Index', [
            'threads' => ThreadsResource::collection($threads),
            'users_count' => $users_count,
            'resolved_count' => $resolved_count,
            'threads_count' => $threads_count,
            'tags' => $tags,
        ]);
    }

    public function show(Thread $thread)
    {
        // load relation in thread
        $thread->load('user', 'tags', 'comments', 'solved')
            ->loadCount('comments');

        // increment thread views
        $thread->visit()->hourlyIntervals()->withIp()->withSession()->withUser();

        // get all comment data by thread id
        $comments = Comment::query()
            ->with('user')
            ->where('thread_id', $thread->id)
            ->get();

        return inertia('Web/Threads/Show', [
            'thread' => new ThreadResource($thread),
            'comments' => $comments,
        ]);
    }
}