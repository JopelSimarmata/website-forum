<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'username',
        'email',
        'password',
        'avatar',
        'bio',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];

    /**
     * accessor avatar user
     */
    protected function avatar(): Attribute
    {
        return Attribute::make(
            get: fn ($value) => $value != '' ? asset('/storage/avatars/' . $value) : 'https://www.gravatar.com/avatar/b2b58f77632a6f5c46d30b08108baa57?d=mm&s=150',
        );
    }

    public function threads()
    {
        return $this->hasMany(Thread::class);
    }

    public function resolved()
    {
        return $this->hasMany(Thread::class)->where('status','resolved');
    }

    public function comments()
    {
        return $this->hasMany(Comment::class);
    }

    public function notifications()
    {
        return $this->hasMany(Notification::class, 'to_user_id');
    }

    public function notifications_unreads()
    {
        return $this->hasMany(Notification::class, 'to_user_id')->where('is_read', '0');
    }


}
