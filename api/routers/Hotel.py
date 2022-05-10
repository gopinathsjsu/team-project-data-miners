import DifferentFunctions
from fastapi import APIRouter
from pydantic import BaseModel
from collections import ChainMap


router=APIRouter(prefix='/hotel',tags=['hotel'])

class Hotel(BaseModel):
    Hotel_name:str
    Locaiton_address:str
    State:str
    Country:str
    City:str
    Zipcode:int
    

class Roomcost(BaseModel):
    fitness:int
    pool:int
    meal: str
    roomtype:str
    weekdays:int
    weekends:int
    specialdays:int


@router.post('/add_hotel')
def add_hotel(hotel: Hotel):
    DifferentFunctions.add_Location_info(hotel.Locaiton_address,hotel.State,hotel.Country,hotel.City,hotel.Zipcode)
    DifferentFunctions.add_hotel(hotel.Hotel_name,DifferentFunctions.get_Location_id_by_address(hotel.Locaiton_address))
    return "Added Successfully"
  

@router.get('/get_all_hotel')
def get_all_hotels():
    return DifferentFunctions.get_all_hotels()

@router.get('/get_specific_hotel')
def get_specific_hotels(id):
    return DifferentFunctions.get_hotel_location_info(id)

@router.get('/get_hotel_review')
def get_hotel_avg_rating(id):
    return DifferentFunctions.get_average_rating_by_hotel(id)

@router.get('/get_all_Review_by_hotel')
def get_all_Review_by_hotel(id):
    return DifferentFunctions.get_all_Review_by_hotel(id)

  
@router.get('/get_available_hotel_rooms')
def get_available_hotel_rooms(check_in: str,checkout: str):
    print(check_in,checkout)
    return DifferentFunctions.find_availabilty(check_in,checkout)
  
@router.get('/get_differnet_days_count')  
def find_count_of_all_different_days(check_in: str,checkout: str):
  weekdays = DifferentFunctions.weekdays(check_in,checkout)[0]
  weekends = DifferentFunctions.weekends(check_in,checkout)[0]
  special_days = DifferentFunctions.special_days(check_in,checkout)[0]
  print(weekdays,weekends,special_days)
  return {"weekdays":weekdays,"weekends":weekends,"special_days":special_days}

@router.get('/get_all_hotel_info')
def hotel_info(check_in: str,checkout: str):
  hotel_data = DifferentFunctions.get_all_hotel_info(check_in,checkout)
  return hotel_data


@router.get('/get_room_types_cost')
def room_types():
  data =  DifferentFunctions.get_room_types_cost()
  dict_keys=[]
  dict_values=[]
  for x in data:
    dict_keys.append(x['Room_type_Name'])
    dict_values.append(x['Price'])
  final = {x:y for x,y in zip(dict_keys,dict_values)}
  return final
    
@router.post('/payment_room_info')
def payment_room_info(rc: Roomcost):
  fitness_cost=10;
  pool_cost=20;
  meal_cost=10
  king=150
  queen=100
  standard=50
  final_dict={'fitness_access':'NA','fitness_access_cost':0,'pool_access':'NA','pool_access_cost':0}
  final_dict['total_days']=rc.weekdays+rc.weekends+rc.specialdays
  if rc.fitness==1:
    final_dict['fitness_access']='Yes'
    final_dict['fitness_access_cost']=fitness_cost
  if rc.pool==1:
    final_dict['pool_access']='Yes'
    final_dict['pool_access_cost']=pool_cost
  if rc.meal:
    final_dict['meal_included']=rc.meal
    final_dict['meal_cost_per_day']=len(rc.meal.split(','))*meal_cost
    final_dict['total_meal_cost']=final_dict['meal_cost_per_day']*(rc.weekdays+rc.weekends+rc.specialdays)
  if rc.roomtype:
    final_dict['room_type']=rc.roomtype
    if rc.roomtype=='king':
      final_dict['Normal_room_cost_per_day']=king
      final_dict['total_weekday_cost']= rc.weekdays * king
      final_dict['additional_weekend_cost']= rc.weekends *  (king*0.25)
      final_dict['additional_seasonal_cost']= rc.specialdays * (king*0.3)
      
    elif rc.roomtype=='queen':
      final_dict['Normal_room_cost_per_day']=queen
      final_dict['total_weekday_cost']= rc.weekdays * queen
      final_dict['additional_weekend_cost']= rc.weekends *  (queen*0.25)
      final_dict['additional_seasonal_cost']= rc.specialdays * (queen*0.3)
    else:
      final_dict['Normal_room_cost_per_day']=standard
      final_dict['total_weekday_cost']= rc.weekdays * standard
      final_dict['additional_weekend_cost']= rc.weekends *  (standard*0.25)
      final_dict['additional_seasonal_cost']= rc.specialdays * (standard*0.3)
  
  final_dict['total_cost_of_room']=final_dict['total_weekday_cost']+final_dict['additional_weekend_cost']+final_dict['additional_seasonal_cost']
  final_dict['total_transactional_cost_per_room']=final_dict['total_cost_of_room']+final_dict['total_meal_cost']+final_dict['fitness_access_cost']+final_dict['pool_access_cost']
  return final_dict