from fastapi import FastAPI,Request
from api.routers import Customer, Rewards, Booking, Hotel, auth
from fastapi.middleware.cors import CORSMiddleware
from LoginRadius import LoginRadius as LR
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates

app = FastAPI(openapi_url='/api/v1/hotelbooking/tasks/openapi.json',
              docs_url='/api/v1/hotelbooking/tasks/docs')

app.add_middleware(CORSMiddleware,allow_origins=["*"],allow_methods=["*"],allow_headers=["*"],allow_credentials=True)


# app.mount("/static", StaticFiles(directory="static"), name="static")


templates = Jinja2Templates(directory="templates")

session={}

@app.get("/",response_class=HTMLResponse)
async def root(request: Request):
    return templates.TemplateResponse("payment.html",{"request": request})

app.include_router(Customer.router,prefix='/api/v1/hotelbooking/tasks')
app.include_router(Rewards.router,prefix='/api/v1/hotelbooking/tasks')
app.include_router(Booking.router,prefix='/api/v1/hotelbooking/tasks')
app.include_router(Hotel.router,prefix='/api/v1/hotelbooking/tasks')
app.include_router(auth.router,prefix='/api/v1/hotelbooking/tasks')