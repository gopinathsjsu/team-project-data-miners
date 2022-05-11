import DifferentFunctions
from fastapi import APIRouter
import json
from pydantic import BaseModel
from LoginRadius import LoginRadius as LR

router=APIRouter(prefix='/customer',tags=['customer'])

LR.API_KEY = "716035df-9955-4776-bca2-782afd2742a5"
LR.API_SECRET = "c2ed8891-0e08-4339-b51e-50894f8a58f6"
loginradius = LR()

class customer(BaseModel):
    Customer_first_name: str
    Customer_last_name:str
    Customer_Phone:int
    Customer_email_id:str

@router.post('/add_customer')
def add_customer(cust: customer):
    return DifferentFunctions.add_customer(cust.Customer_first_name,cust.Customer_last_name,cust.Customer_Phone,cust.Customer_email_id)

@router.post('/update_customer')
def update_customer(id,request):
    req = json.loads(request)
    return DifferentFunctions.update_Customer(id,req)

@router.get('/get_all_customer')
def get_all_customer_data():
    return DifferentFunctions.get_all_customer_data()

@router.get('/get_particular_customer_info')
def get_specific_user_data(token: str):
    email_id=loginradius.authentication.get_profile_by_access_token(token)['Email'][0]['Value']
    return DifferentFunctions.get_specific_user_data_email(email_id)
  
  
@router.get('/get_particular_customer_info_email')
def get_specific_user_data_email(email):
    return DifferentFunctions.get_specific_user_data_email(email)
  
@router.get('/get_customer_booking_details')
def get_customer_booking_details(usertoken: str):
  email_id=loginradius.authentication.get_profile_by_access_token(usertoken)['Email'][0]['Value']
  user_id =  DifferentFunctions.get_specific_user_data_email(email_id)['Customer_id']
  return DifferentFunctions.get_customer_booking_details(user_id)

@router.get('/cancel_Booking')
def cancel_Booking(id):
   return DifferentFunctions.cancel_Booking(id)