<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddForeignKeysToMyWorkoutPlansTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
      /* Schema::table('my_workout_plans', function (Blueprint $table) {
            $table->foreign('member_id')->references('id')->on('users');
            $table->foreign('trainer_id')->references('id')->on('trainers');
            $table->foreign('workout_id')->references('id')->on('workouts');
            
            $table->foreign('gyms_id')->references('id')->on('gyms');
           
        });*/
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('my_workout_plans', function (Blueprint $table) {
            $table->dropForeign(['member_id']);
            $table->dropForeign(['workout_id']);
            $table->dropForeign(['trainer_id']);
            $table->dropForeign(['gyms_id']);
        });
    }
}
