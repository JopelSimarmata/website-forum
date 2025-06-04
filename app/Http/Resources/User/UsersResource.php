<?php

namespace App\Http\Resources\User;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class UsersResource extends JsonResource
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
            'name' => $this->name,
            'username' => $this->username,
            'email' => $this->email,
            'avatar' => $this->avatar,
            'threads' => $this->threads_count,
            'resolved' => $this->resolved_count,
            'comments' => $this->comments_count,
            'notifications' => $this->notifications_count,
            'notifications_unreads' => $this->notification_unreads_count,
        ];
    }
}
