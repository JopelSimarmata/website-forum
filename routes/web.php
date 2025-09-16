<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Web\ThreadController as WebThreadController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', fn() => inertia('Auth/Login'));

Route::group(['middleware' => ['auth']], function(){
    /** thread route */
    Route::controller(WebThreadController::class)->as('threads.')->group(function(){
        Route::get('/threads', 'index')->name('index');
        Route::get('/threads/{thread:slug}', 'show')->name('show');
    });
});

require __DIR__.'/auth.php';