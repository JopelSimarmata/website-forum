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
        Schema::create('threads', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->cascadeOnDelete()->cascadeOnUpdate();
            $table->foreignId('solved_comment_id')->nullable()->cascadeOnDelete();
            $table->string('title');
            $table->string('slug');
            $table->text('description');
            $table->text('content');
            $table->enum('status',['resolved', 'unresolved'])->default('unresolved');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('threads');
    }
};
