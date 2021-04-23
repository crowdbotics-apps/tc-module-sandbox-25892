from django_summernote.admin import SummernoteModelAdmin
from django.contrib import admin

# Register your models here.
from .models import TermAndCondition


# admin.site.register(TermAndCondition)


class TermAndConditionAdmin(SummernoteModelAdmin):
    summernote_fields = ('body')

admin.site.register(TermAndCondition, TermAndConditionAdmin)