<?php

namespace App\Http\Resources\Thread;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ThreadsResource extends JsonResource
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
            'solved' => $this->solved->comment_id ?? null,
            'description' => $this->description,
            'content' => $this->content,
            'tags' => $this->tags->map(fn($tag) => [
                'label' => $tag->name,
                'slug' => $tag->slug,
                'value' => $tag->id,
            ]),
            'user' => [
                'name' => $this->user->name,
                'username' => $this->user->username,
                'avatar' => $this->user->avatar,
                'threads' => $this->user->threads_count,
                'resolved' => $this->user->resolved_count,
                'comments' => $this->user->comments_count,
            ],
            'created_at' => $this->created_at->format('d/m/Y'),
            'visit_count_total' => $this->visit_count_total,
            'comments' => $this->comments_count,
        ];
    }
}