import DifferentFunctions
from fastapi import APIRouter
import json
from pydantic import BaseModel
from LoginRadius import LoginRadius as LR
from fastapi.responses import RedirectResponse

router=APIRouter(prefix='/auth',tags=['auth'])


LR.API_KEY = "716035df-9955-4776-bca2-782afd2742a5"
LR.API_SECRET = "c2ed8891-0e08-4339-b51e-50894f8a58f6"
loginradius = LR()
session={}
@router.get('/login')
def login(token=""):
  if token:
    global session
    email_id=loginradius.authentication.get_profile_by_access_token(token)['Email'][0]['Value']
    user_exist=DifferentFunctions.check_specific_user_exist(email_id)
    print(user_exist)
    if not user_exist:
      first_name= loginradius.authentication.get_profile_by_access_token(token)['FirstName']
      last_name= loginradius.authentication.get_profile_by_access_token(token)['LastName']  
      try:
        DifferentFunctions.add_customer(first_name,last_name,email_id)
      except:
        return "some issues in DB, please try again after sometime"
    session[email_id]=token
  else:
    return "some issues, please try again after sometime"
  return RedirectResponse(f"https://pitch-luck-amethyst.glitch.me?token={token}")
  
@router.get("/logout")
def logout(token: str):
  global session
  try:
    emailid=loginradius.authentication.get_profile_by_access_token(token)['Email'][0]['Value']
    if emailid in session.keys():
      loginradius.authentication.auth_in_validate_access_token(token)
      session.pop(emailid)
  except:
    print("issues")
    return False
  return RedirectResponse("https://hotelbooking.hub.loginradius.com/auth.aspx?action=logout")