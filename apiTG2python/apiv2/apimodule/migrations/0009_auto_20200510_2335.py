# Generated by Django 3.0.3 on 2020-05-11 02:35

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('apimodule', '0008_auto_20200510_2334'),
    ]

    operations = [
        migrations.AlterField(
            model_name='picture_origin',
            name='id',
            field=models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
        migrations.AlterField(
            model_name='picture_origin',
            name='uu_id',
            field=models.UUIDField(default=uuid.UUID('d4e109a9-6b61-443d-9889-22f590613d82'), editable=False, unique=True),
        ),
    ]