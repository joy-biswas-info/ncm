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
            $table->string('profile_photo')->nullable();
            $table->string('academic_year');
            $table->string('class_roll');
            $table->string('gurdian_name');
            $table->string('gurdian_phone_no');
            $table->string('permanent_address');
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
