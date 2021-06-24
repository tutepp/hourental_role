<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateHousesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('houses', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('category_id');
            $table->unsignedBigInteger('owner_id');
            $table->unsignedBigInteger('renter_id')->nullable();
            $table->integer('room');
            $table->float('diameter');
            $table->float('price');
            $table->string('address');
            $table->boolean('status');
            $table->foreign('category_id')->references('id')->on('categories');
            $table->foreign('owner_id')->references('id')->on('users');
            $table->foreign('renter_id')->references('id')->on('users');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('houses');
    }
}
