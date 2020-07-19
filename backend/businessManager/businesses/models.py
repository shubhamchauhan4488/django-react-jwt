from django.db import models
from django.contrib.auth.models import User
from django import forms

# class HoursOfOperation(models.Model):
#     start_time = models.TimeField(null=True)
#     end_time = models.TimeField(null=True)


# class DayOfOperation(models.Model):
#     DAYS = (
#         ('Mon', 'Monday'),
#         ('Tue', 'Tuesday'),
#         ('Wed', 'Wednesday'),
#         ('Th', 'Thursday'),
#         ('Fri', 'Friday'),
#         ('Sat', 'Saturday'),
#         ('Sun', 'Sunday'),
#     )
#     day = models.CharField(max_length=3, choices=DAYS)
#    #  day = MultiSelectField(choices=DAYS)
#     from_hour = models.TimeField(null=True)
#     to_hour = models.TimeField(null=True)

#    #  def __str__(self):
#    #      return self.day

HOUR_OF_DAY_24 = [(i, i) for i in range(1, 25)]

WEEKDAYS = [
    (1, ("Monday")),
    (2, ("Tuesday")),
    (3, ("Wednesday")),
    (4, ("Thursday")),
    (5, ("Friday")),
    (6, ("Saturday")),
    (7, ("Sunday")),
]


class Business(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=100, unique=True)
    description = models.CharField(max_length=500, blank=True)
    tagline = models.CharField(max_length=200, blank=True)
    owner = models.ForeignKey(
        User, related_name="Businessses", on_delete=models.CASCADE, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name


class OperatingHours(models.Model):
    business = models.ForeignKey(
        Business, related_name="Businessses", on_delete=models.CASCADE, null=True)
    weekday_from = models.PositiveSmallIntegerField(
        choices=WEEKDAYS)
    weekday_to = models.PositiveSmallIntegerField(choices=WEEKDAYS)
    from_hour = models.PositiveSmallIntegerField(choices=HOUR_OF_DAY_24)
    to_hour = models.PositiveSmallIntegerField(choices=HOUR_OF_DAY_24)

    def get_weekday_from_display(self):
        return WEEKDAYS[self.weekday_from]

    def get_weekday_to_display(self):
        return WEEKDAYS[self.weekday_to]
