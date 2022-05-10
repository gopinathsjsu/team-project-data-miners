import DifferentFunctions
from fastapi import APIRouter

router=APIRouter(prefix='/rewards',tags=['rewards'])

@router.get('/get_rewards_by_id')
def get_rewards_by_id(id):
  return DifferentFunctions.get_rewards(id)
