# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'django-insecure-hyq4r*l94_b$f#+a0wie4udua+o7_o^$rjaf#kr2%598s5_h$a'

# Database
# https://docs.djangoproject.com/en/4.1/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'music_database',
        'HOST': 'localhost',
        'USER': 'root',
        'PASSWORD': 'password',
        'HOST': 'music-library-database',
        'PORT': '3306',
        'OPTIONS': {
            'autocommit': True
        }
    }
}

