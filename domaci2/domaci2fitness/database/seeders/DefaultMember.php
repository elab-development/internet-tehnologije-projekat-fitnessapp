<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class DefaultMember extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create(
            [
            'username' => 'member',
            'email' => 'member@example.com',
            'password' => bcrypt('Jelena18*'),
            'role' => 'member',
            ]
            );
    }
}
