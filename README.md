# Dojo Laravel 1.0
Aplikasi RestFull menggunakan Framework PHP Laravel + Mysql + Framework Dojo Toolkit

### Tutorial Buat Project Baru Laravel
Sebelumnya Pastikan Spesifikasi dibawah ini sudah Terpenuhi:
- PHP >= 5.6.4
- OpenSSL PHP Extension
- PDO PHP Extension
- Mbstring PHP Extension
- Tokenizer PHP Extension
- XML PHP Extension

#### 1.Installing Composer

```sh
$ cd dojo-laravel
$ sudo apt-get install composer
$ composer install
```

#### 2. Installing Laravel
Tambahkan laravel ke /bin agar bisa mengakses laravel dimana saja.
```sh
$ export PATH="$PATH:$HOME/.config/composer/vendor/bin"
```
Lalu Buat Project Baru
```sh
$ composer create-project --prefer-dist laravel/laravel NAMA_PROJECT "5.3.*" 
```
Test apakah sudah ready apa belum ?
```sh
$ php artisan -version '//untuk cek versi'
$ php artisan serve '//untuk compile aplikasi (kaya di java aja :D)'
```

### Installation Aplikasi

Dojo Laravel 1.0 requires [PHP 5.6+](http://php.net/) to run.

#### 1.Install Composer.

```sh
$ cd dojo-laravel
$ sudo apt-get install composer
$ composer install
```
