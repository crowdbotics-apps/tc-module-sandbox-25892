from rest_framework import authentication, permissions
from .models import TermAndCondition
from .serializers import TermAndConditionSerializer
from rest_framework import viewsets


class TermAndConditionViewSet(viewsets.ModelViewSet):
    serializer_class = TermAndConditionSerializer
    permission_classes = [permissions.AllowAny]
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
   	#This query will only return a single (if it exists) terms, and that is the most recently updated one that also has an active flag.
    queryset = TermAndCondition.objects.filter(is_active=True).order_by('-updated_at')[:1]
   