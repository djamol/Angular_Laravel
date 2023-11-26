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
        Schema::create('movies', function (Blueprint $table) {
	$table->id();
        $table->string('title');
            $table->string('year')->nullable();
            $table->string('rated')->nullable();
            $table->string('released')->nullable();
            $table->string('runtime')->nullable();
            $table->json('genre')->nullable();
            $table->string('director')->nullable();
            $table->string('writer')->nullable();
            $table->string('actors')->nullable();
            $table->text('plot')->nullable();
            $table->string('language')->nullable();
            $table->string('country')->nullable();
            $table->string('awards')->nullable();
            $table->string('poster')->nullable();
            $table->json('ratings')->nullable();
            $table->string('meta_score')->nullable();
            $table->string('imdb_rating')->nullable();
            $table->string('imdb_votes')->nullable();
            $table->string('imdb_id')->nullable();
            $table->string('type');
            $table->string('dvd')->nullable();;
            $table->string('box_office')->nullable();;
            $table->string('production')->nullable();;
        $table->unsignedBigInteger('category_id')->index();
        $table->foreign('category_id')->references('id')->on('categories');
        $table->timestamps();

	});
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('books');
    }
};
