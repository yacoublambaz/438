#from django.test import TestCase

# Create your tests here.
from django.test import LiveServerTestCase
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import Select
import time

# Create your tests here.

class TeamsFormTest(LiveServerTestCase):
  def testforms(self):
    time.sleep(3)
    selenium = webdriver.Chrome()
    selenium.get('http://127.0.0.1:8000/teams')
    #find the elements you need to submit form
    team_name = selenium.find_element_by_id('id_name')
    team_city = selenium.find_element_by_id('id_city')
    team_year_founded = selenium.find_element_by_id('id_year_founded')

    submit = selenium.find_element_by_id('submit_button')

    #populate the form with data
    team_name.send_keys('Los Angeles Lakers')
    team_city.send_keys('Los Angeles')
    team_year_founded.send_keys('1980')

    #submit form
    submit.send_keys(Keys.RETURN)

    #check result; page source looks at entire html document
    assert 'Los Angeles Lakers' in selenium.page_source
    selenium.quit()

class PlayerFormTest(LiveServerTestCase):

  def testform(self):
    time.sleep(3)
    selenium = webdriver.Chrome()
    selenium.get('http://127.0.0.1:8000/players')
    #find the elements you need to submit form
    player_name = selenium.find_element_by_id('id_name')
    player_height = selenium.find_element_by_id('id_height')
    player_team = Select(selenium.find_element_by_id('id_team'))
    player_ppg = selenium.find_element_by_id('id_ppg')

    submit = selenium.find_element_by_id('submit_button')

    #populate the form with data
    player_name.send_keys('Lebron James')
    player_team.select_by_visible_text("Los Angeles Lakers")
    player_height.send_keys('6 feet 9 inches')
    player_ppg.send_keys('25.7')

    #submit form
    submit.send_keys(Keys.RETURN)

    #check result; page source looks at entire html document
    assert 'Lebron James' in selenium.page_source
    selenium.quit()
  