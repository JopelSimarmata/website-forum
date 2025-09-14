<?php

namespace App\Http\Resources\Thread;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ThreadResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'slug' => $this->slug,
            'description' => $this->description,
            'content' => $this->content,
            'solved' => $this->solved->comment_id ?? null,
            'status' => $this->status,
            'tags' => $this->tags->map(fn($tag) => [
                'label' => $tag->name,
                'value' => $tag->id,
            ]),
            'user' => [
                'id' => $this->user->id,
                'name' => $this->user->name,
                'username' => $this->user->username,
                'avatar' => $this->user->avatar,
                'threads' => $this->user->threads->count(),
                'resolved' => $this->user->threads->where('status','resolved')->count(),
                'comments' => $this->user->comments->count(),
            ],
            'created_at' => $this->created_at->diffForHumans(),
            'comments_count' => $this->comments_count,
            'comments' => $this->comments->map(fn($comment) => [
                'created_at' => $comment->created_at->diffForHumans(),
            ])
        ];
    }
}