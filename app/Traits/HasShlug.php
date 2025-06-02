<?php

namespace App\Traits;

use Illuminate\Support\Str;
use Illuminate\Support\Facedes\Schema;

trait HasShlug
{
    public static function BootHasSlug(){

        static::creating(function ($model){

            if (Schema::hasColumn($model->getTable(), 'slug')) {

                $model->slug = Str::slug($model->name ?? $model->title);

            }
        });

        static::updating(function ($model){

            if (Schema::hasColumn($model->getTable(), 'slug')) {

                $model->slug = Str::slug($model->name ?? $model->title);
                
            }

        });
    }
}