# Generated by Django 3.1.3 on 2022-11-15 18:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0003_auto_20221115_2038'),
    ]

    operations = [
        migrations.AlterField(
            model_name='person',
            name='telephone1',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='person',
            name='telephone2',
            field=models.CharField(max_length=100),
        ),
    ]
