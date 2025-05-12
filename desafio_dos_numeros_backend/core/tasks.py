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
        nums = [p.numOne, p.numTwo, p.numThree]
        p.media = media_calc(nums)
        p.median = median_calc(nums)
        p.status = "Done"
        p.save()
    except Process.DoesNotExist:
        print(f"Processo com ID {process_id} não encontrado.")
