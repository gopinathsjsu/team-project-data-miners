import DifferentFunctions
from fastapi import APIRouter
from pydantic import BaseModel
from collections import ChainMap
from LoginRadius import LoginRadius as LR


router=APIRouter(prefix='/rewards',tags=['rewards'])

LR.API_KEY = "716035df-9955-4776-bca2-782afd2742a5"
LR.API_SECRET = "c2ed8891-0e08-4339-b51e-50894f8a58f6"
loginradius = LR()


@router.get('/get_rewards_by_id')
def get_rewards_by_id(usertoken: str):
  email_id=loginradius.authentication.get_profile_by_access_token(usertoken)['Email'][0]['Value']
  user_id =  DifferentFunctions.get_specific_user_data_email(email_id)['Customer_id']
  return DifferentFunctions.get_rewards(user_id)
  
