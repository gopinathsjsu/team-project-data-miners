from datetime import datetime

import DifferentFunctions
from fastapi import APIRouter
from pydantic import BaseModel

from DbModels import *

router = APIRouter(prefix='/Booking', tags=['bookings'])


class booking(BaseModel):
    Booking_id: int
    Customer_id: int
    Booking_date: str
    Check_in_date: datetime
    Check_in_time: str
    check_out_date: datetime
    check_out_time: str
    No_of_guest: int
    Breakfast_included: str
    Lunch_included: str
    Dinner_included: str
    hotel_id: int
    room_type_id: int


@router.post('/new_Booking')
def new_Booking(book: booking):
    return DifferentFunctions.new_Booking(book.Booking_id, book.Customer_id,book.Booking_date, book.Check_in_date, book.Check_in_time,
                                          book.check_out_date, book.Check_in_time, book.No_of_guest,
                                          book.Breakfast_included, book.Lunch_included, book.Dinner_included, book.hotel_id, book.room_type_id)


@router.get('/cancel_Booking')
def cancel_Booking(id):
    return DifferentFunctions.cancel_Booking(id)


@router.get('/completed_Booking')
def completed_Booking(id):
    return DifferentFunctions.completed_Booking(id)


@router.get('/completed_Booking')
def completed_Booking(id):
    return DifferentFunctions.completed_Booking(id)


@router.get('/noShow_Booking')
def noShow_Booking(id):
    return DifferentFunctions.noShow_Booking(id)


@router.get('/retrieve_all_booking_by_customer_id')
def retrieve_all_booking_by_customer_id(id):
    return DifferentFunctions.retrieve_all_booking_by_customer_id(id)


@router.get('/retrieve_all_booking_by_customer_id')
def retrieve_all_booking_by_customer_first_name(id):
    return DifferentFunctions.retrieve_all_booking_by_customer_first_name(id)


@router.get('/retrieve_all_booking_by_customer_email')
def retrieve_all_booking_by_customer_email(email_id):
    return DifferentFunctions.retrieve_all_booking_by_customer_email(email_id)


@router.get('/retrieve_all_booking_by_hotel')
def retrieve_all_booking_by_hotel(id):
    return DifferentFunctions.retrieve_all_booking_by_hotel(id)