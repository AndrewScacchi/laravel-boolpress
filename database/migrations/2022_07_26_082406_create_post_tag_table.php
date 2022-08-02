<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePostTagTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('post_tag', function (Blueprint $table) {
            // TODO: non mette nessuna chiave primaria
            // $table->id('id'); // campo superfluo, neanche la guida lo riporta
            $table->foreignId('post_id')->constrained();
            $table->foreignId('tag_id')->constrained();
            // $table->primary(['post_id', 'tag_id']); // TODO: fa casino con le foreign
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('post_tag');
    }
}
