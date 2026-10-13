<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Database\Factories\UserFactory;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Str;

class User extends Authenticatable
{
    /** @use HasFactory<UserFactory> */
    use HasFactory, SoftDeletes, Notifiable, HasUuids;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var list<string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    public static function booted(): void
    {
        static::creating(function (self $user) {
            if (empty($user->reference_id)) {
                $user->reference_id = static::generateReferenceId();
            }

            if (empty($user->slug)) {
                $user->slug = Str::slug($user->name, '') . '-' . $user->reference_id;
            }
        });
    }

    public static function generateReferenceId(): string
    {
        $characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
        $max = strlen($characters) - 1;

        do {
            $referenceId = '';

            for ($i = 0; $i < 6; $i++) {
                $referenceId .= $characters[random_int(0, $max)];
            }
        } while (self::withTrashed()->where('reference_id', $referenceId)->exists());

        return $referenceId;
    }

    public function posts(): HasMany
    {
        return $this->hasMany(Post::class);
    }

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }
}
