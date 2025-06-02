<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('notifications', function (Blueprint $table) {
            $table->id();
            $table->foreignId('from_user_id')->references('id')->on('users');
            $table->foreignId('to_user_id')->references('id')->on('users');
            $table->foreignId('thread_id')->references('id')->on('threads')->cascadeOnDelete()->cascadeOnUpdate();
            $table->boolean('is_read')->default(0);
            $table->text('messages');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('notifications');
    }
};
