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
        Schema::create('solveds', function (Blueprint $table) {
            $table->id();
            $table->foreignId('thread_id')->references('id')->on('threads')->cascadeOnDelete()->cascadeOnUpdate();
            $table->foreignId('comment_id')->references('id')->on('comments')->cascadeOnDelete()->cascadeOnUpdate();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('solveds');
    }
};
