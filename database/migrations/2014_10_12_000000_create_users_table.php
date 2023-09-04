<?php

use App\Enums\BloodGroup;
use App\Enums\ReadyToDonet;
use App\Enums\UserRole;
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
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->string('phone');
            $table->enum('blood_group', BloodGroup::toArray());
            $table->enum('ready_to_donet', ReadyToDonet::toArray())->default(ReadyToDonet::no);
            $table->string('age');
            $table->string('weight');
            $table->string('gender');
            $table->string('profile_photo')->nullable();
            $table->string('academic_session');
            $table->string('class_roll');
            $table->string('batch_no');
            $table->string('job_location')->nullable();
            $table->string('job_title')->nullable();
            $table->string('permanent_address');
            $table->string('present_address');
            $table->boolean('approved')->default(false);
            $table->enum('role', UserRole::toArray())->default(UserRole::user);
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};
