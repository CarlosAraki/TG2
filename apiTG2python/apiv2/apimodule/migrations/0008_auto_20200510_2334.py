# Generated by Django 3.0.3 on 2020-05-11 02:34

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('apimodule', '0007_auto_20200510_2333'),
    ]

    operations = [
        migrations.AlterField(
            model_name='picture_origin',
            name='uu_id',
            field=models.UUIDField(default=uuid.UUID('5fa38160-a17b-4d36-8192-94984dc1cfda'), editable=False),
        ),
    ]
