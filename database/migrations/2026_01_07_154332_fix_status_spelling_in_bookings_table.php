<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    public function up(): void
    {
        // Step 1: change enum to include 'cancelled'
        DB::statement("
            ALTER TABLE bookings
            MODIFY status ENUM('pending','confirmed','canceled','cancelled') DEFAULT 'pending'
        ");

        // Step 2: update existing data
        DB::table('bookings')
            ->where('status', 'canceled')
            ->update(['status' => 'cancelled']);

        // Step 3: remove old 'canceled' from enum
        DB::statement("
            ALTER TABLE bookings
            MODIFY status ENUM('pending','confirmed','cancelled') DEFAULT 'pending'
        ");
    }

    public function down(): void
    {
        // Step 1: add 'canceled' back
        DB::statement("
            ALTER TABLE bookings
            MODIFY status ENUM('pending','confirmed','canceled','cancelled') DEFAULT 'pending'
        ");

        // Step 2: revert data
        DB::table('bookings')
            ->where('status', 'cancelled')
            ->update(['status' => 'canceled']);

        // Step 3: remove 'cancelled' from enum
        DB::statement("
            ALTER TABLE bookings
            MODIFY status ENUM('pending','confirmed','canceled') DEFAULT 'pending'
        ");
    }
};
