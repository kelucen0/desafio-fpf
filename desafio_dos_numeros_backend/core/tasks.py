from celery import shared_task
from .models import Process

def media_calc(nums):
    return sum(nums) / len(nums)

def median_calc(nums):
    nums.sort()
    return nums[1]

@shared_task
def process_nums(process_id):
    try:
        p = Process.objects.get(id=process_id)
        numeros = [p.num1, p.num2, p.num3]
        p.media = media_calc(numeros)
        p.mediana = median_calc(numeros)
        p.status = "Done"
        p.save()
    except Process.DoesNotExist:
        pass
