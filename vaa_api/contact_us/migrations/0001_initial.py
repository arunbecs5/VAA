# Generated by Django 4.2.5 on 2023-09-27 19:47

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='ContactUS',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=30)),
                ('email', models.CharField(max_length=30)),
                ('phone', models.CharField(max_length=6)),
                ('subject', models.CharField(max_length=5)),
                ('message', models.CharField(max_length=3)),
                ('added_on', models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]
