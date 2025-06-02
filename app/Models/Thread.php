<?php

namespace App\Models;

use App\Traits\HasShlug;
use Coderflex\Laravisit\Concerns\CanVisit;
use Coderflex\Laravisit\Concerns\HasVisits;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Thread extends Model implements CanVisit
{
    use HasFactory, HasShlug, HasVisits;


    protected $fillable = ['user_id','title','slug','description','content','solved_comment_id','status'];


    public function scopeSearch($query)
    {
        return $query->when(request()->search, function($query){
            $query->where('title', 'like', '%'.request()->search. '%');
        });
    }


    public function scopeStatus($query)
    {
        return $query->when(request()->status, function($query){
            $query->where('status', request()->status);
        });
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function tags()
    {
        return $this->belongsToMany(Tag::class);
    }

    public function comments()
    {
        return $this->hasMany(Comment::class);
    }

    public function notifications()
    {
        return $this->hasMany(Notification::class);
    }

    public function solved()
    {
        return $this->hasOne(Solved::class);
    }

}
