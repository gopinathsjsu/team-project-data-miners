from DbModels import *
from sqlalchemy.orm import declarative_base,sessionmaker
from sqlalchemy import Column,String,DateTime,Integer,BigInteger,create_engine

def add_customer(Customer_first_name,Customer_last_name,Customer_Phone,Customer_email_id):
    '''
    Accepts the following customer details and adds the customer to the customer table
    
    :param Customer_id:
    :param Customer_first_name:
    :param Customer_last_name:
    :param Customer_Phone:
    :param Customer_email_id:
    :return: Success message if successfully added
    '''
    add_customer = Customer(Customer_first_name=Customer_first_name,Customer_last_name=Customer_last_name,Customer_Phone=Customer_Phone,Customer_email_id=Customer_email_id)
    session.add(add_customer)
    session.commit()
    return "Successfully Added"

def update_Customer(id,kwargs):
    '''
    :param kwargs: Customer ID and to be modified params
    :return: success message
    '''
    customers = session.query(Customer).filter_by(Customer_id=id)
    for key,values in kwargs.items():
            if key == 'Customer_first_name':
                customers.Customer_first_name=values
            elif key == 'Customer_last_name':
                customers.Customer_last_name=values
            elif key == 'Customer_Phone':
                customers.Customer_Phone=values
            else:
                customers.Customer_email_id=values
    session.commit()
    return "Success"


def get_all_customer_data():
    '''
    :return: returns all customers from the customer table
    '''
    customers = session.query(Customer)
    for customer in customers:
        return(customer.Customer_id,customer.Customer_first_name,customer.Customer_last_name,customer.Customer_Phone,customer.Customer_email_id)