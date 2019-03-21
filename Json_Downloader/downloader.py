from selenium import webdriver
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.common.keys import Keys
import json
import win32clipboard
# from countries import ecademy_json
import os
import time

links = [
    {
        "lang": "en_AU",
        "link": "http://dkwcmap10.emea.group.grundfos.com:4502/content/gpa/en_AU/training-events/ecademy/all-topics.2.json"
    },
    {
        "lang": "de_AT",
        "link": "http://dkwcmap10.emea.group.grundfos.com:4502/content/gpo/de_AT/training-events/ecademy/all-topics.2.json"
    },
    {
        "lang": "nl_BE",
        "link": "http://dkwcmap10.emea.group.grundfos.com:4502/content/gbl/nl_BE/training-events/ecademy/all-topics.2.json"
    },
        {
        "lang": "fr_BE",
        "link": "http://dkwcmap10.emea.group.grundfos.com:4502/content/gbl/fr_BE/training-events/ecademy/all-topics.2.json"
    },
        {
        "lang": "zh_CN",
        "link": "http://dkwcmap10.emea.group.grundfos.com:4502/content/gsh/zh_CN/training-events/ecademy/all-topics.2.json"
    },
        {
        "lang": "cs_CZ",
        "link": "http://dkwcmap10.emea.group.grundfos.com:4502/content/gcz/cs_CZ/training-events/ecademy/all-topics.2.json"
    },
        {
        "lang": "da_dk",
        "link": "http://dkwcmap10.emea.group.grundfos.com:4502/content/gdk/da/training-events/ecademy/all-topics.2.json"
    },
            {
        "lang": "en_EG",
        "link": "http://dkwcmap10.emea.group.grundfos.com:4502/content/geg/en_EG/training-events/ecademy/all-topics.2.json"
    },

        {
        "lang": "fi_FI",
        "link": "http://dkwcmap10.emea.group.grundfos.com:4502/content/gsf/fi/training-events/ecademy/all-topics.2.json"
    },
        {
        "lang": "fr_FR",
        "link": "http://dkwcmap10.emea.group.grundfos.com:4502/content/gfd/fr/training-events/ecademy/all-topics.2.json"
    },
        {
        "lang": "de_DE",
        "link": "http://dkwcmap10.emea.group.grundfos.com:4502/content/gws/de/training-events/ecademy/all-topics.2.json"
    },
        {
        "lang": "el_GR",
        "link": "http://dkwcmap10.emea.group.grundfos.com:4502/content/gph/el_GR/training-events/ecademy/all-topics.2.json"
    },
        {
        "lang": "hu_HU",
        "link": "http://dkwcmap10.emea.group.grundfos.com:4502/content/ghu/hu/training-events/ecademy/all-topics.2.json"
    },
        {
        "lang": "en_IN",
        "link": "http://dkwcmap10.emea.group.grundfos.com:4502/content/gin/en_IN/training-events/ecademy/all-topics.2.json"
    },
        {
        "lang": "gas_ID",
        "link": "http://dkwcmap10.emea.group.grundfos.com:4502/content/gas/id/training-events/ecademy/all-topics.2.json"
    },
    {
        "lang": "gpi_EN",
        "link": "http://dkwcmap10.emea.group.grundfos.com:4502/content/gpi/en/training-events/ecademy/all-topics.2.json"
    },
        {
        "lang": "git_IT",
        "link": "http://dkwcmap10.emea.group.grundfos.com:4502/content/git/it/training-events/ecademy/all-topics.2.json"
    },
        {
        "lang": "en_MY",
        "link": "http://dkwcmap10.emea.group.grundfos.com:4502/content/gpm/en_MY/training-events/ecademy/all-topics.2.json"
    },
        {
        "lang": "gnl_NL",
        "link": "http://dkwcmap10.emea.group.grundfos.com:4502/content/gnl/nl/training-events/ecademy/all-topics.2.json"
    },
        {
        "lang": "en_NZ",
        "link": "http://dkwcmap10.emea.group.grundfos.com:4502/content/gnz/en_NZ/training-events/ecademy/all-topics.2.json"
    },
        {
        "lang": "gno_NO",
        "link": "http://dkwcmap10.emea.group.grundfos.com:4502/content/gno/no/training-events/ecademy/all-topics.2.json"
    },
        {
        "lang": "en_PH",
        "link": "http://dkwcmap10.emea.group.grundfos.com:4502/content/gpp/en_PH/training-events/ecademy/all-topics.2.json"
    },
        {
        "lang": "gpl_PL",
        "link": "http://dkwcmap10.emea.group.grundfos.com:4502/content/gpl/pl/training-events/ecademy/all-topics.2.json"
    },
        {
        "lang": "bgp_PT",
        "link": "http://dkwcmap10.emea.group.grundfos.com:4502/content/bgp/pt/training-events/ecademy/all-topics.2.json"
    },
        {
        "lang": "gmo_RU",
        "link": "http://dkwcmap10.emea.group.grundfos.com:4502/content/gmo/ru/training-events/ecademy/all-topics.2.json"
    },
            {
        "lang": "en_SA",
        "link": "http://dkwcmap10.emea.group.grundfos.com:4502/content/gsa/en_SA/training-events/ecademy/all-topics.2.json"
    },
        {
        "lang": "en_SG",
        "link": "http://dkwcmap10.emea.group.grundfos.com:4502/content/gsi/en_SG/training-events/ecademy/all-topics.2.json"
    },
        {
        "lang": "gsk_SK",
        "link": "http://dkwcmap10.emea.group.grundfos.com:4502/content/gsk/sk/training-events/ecademy/all-topics.2.json"
    },
        {
        "lang": "en_ZA",
        "link": "http://dkwcmap10.emea.group.grundfos.com:4502/content/gza/en_ZA/training-events/ecademy/all-topics.2.json"
    },
        {
        "lang": "bge_ES",
        "link": "http://dkwcmap10.emea.group.grundfos.com:4502/content/bge/es/training-events/ecademy/all-topics.2.json"
    },
        {
        "lang": "sv_SE",
        "link": "http://dkwcmap10.emea.group.grundfos.com:4502/content/gsv/sv_SE/training-events/ecademy/all-topics.2.json"
    },
        {
        "lang": "de_CH",
        "link": "http://dkwcmap10.emea.group.grundfos.com:4502/content/gps/de_CH/training-events/ecademy/all-topics.2.json"
    },
        {
        "lang": "gtr_TR",
        "link": "http://dkwcmap10.emea.group.grundfos.com:4502/content/gtr/tr/training-events/ecademy/all-topics.2.json"
    },
        {
        "lang": "en_GB",
        "link": "http://dkwcmap10.emea.group.grundfos.com:4502/content/gb/en_GB/training-events/ecademy/all-topics.2.json"
    },
            {
        "lang": "en_AE",
        "link": "http://dkwcmap10.emea.group.grundfos.com:4502/content/ggd/en_AE/training-events/ecademy/all-topics.2.json"
    },
            {
        "lang": "ru_KZ",
        "link": "http://dkwcmap10.emea.group.grundfos.com:4502/content/gka/ru_KZ/training-events/ecademy/all-topics.2.json"
    },
            {
        "lang": "ko_KR",
        "link": "http://dkwcmap10.emea.group.grundfos.com:4502/content/gpk/ko_KR/training-events/ecademy/all-topics.2.json"
    },
            {
        "lang": "ja_JA",
        "link": "http://dkwcmap10.emea.group.grundfos.com:4502/content/gjk/ja/training-events/ecademy/all-topics.2.json"
    },
            {
        "lang": "et_EE",
        "link": "http://dkwcmap10.emea.group.grundfos.com:4502/content/gst/et_EE/training-events/ecademy/all-topics.2.json"
    },
            {
        "lang": "lv_LV",
        "link": "http://dkwcmap10.emea.group.grundfos.com:4502/content/gla/lv/training-events/ecademy/all-topics.2.json"
    },
            {
        "lang": "lb_EN",
        "link": "http://dkwcmap10.emea.group.grundfos.com:4502/content/gegly/en_LY/training-events/ecademy/all-topics.2.json"
    },
            {
        "lang": "lt_LT",
        "link": "http://dkwcmap10.emea.group.grundfos.com:4502/content/gli/lt/training-events/ecademy/all-topics.2.json"
    },
                {
        "lang": "sd_EN",
        "link": "http://dkwcmap10.emea.group.grundfos.com:4502/content/gegsd/en_SD/training-events/ecademy/all-topics.2.json"
    }
]





driver=webdriver.Chrome()
driver.set_page_load_timeout(30)
driver.get("http://dkwcmap10.emea.group.grundfos.com:4502/content/gas/id/training-events/ecademy/all-topics.2.json")
driver.find_element_by_id('username').send_keys('73559')
driver.find_element_by_id('password').send_keys('7355973559')
driver.find_element_by_id('submit-button').click()
x = 0
for language in links:
    driver.get(language["link"])
    driver.maximize_window()
    driver.implicitly_wait(20)
    

    driver.find_element_by_css_selector('body').click()

    ActionChains(driver).key_down(Keys.CONTROL).send_keys('a').key_up(Keys.CONTROL).perform()

    ActionChains(driver).key_down(Keys.CONTROL).send_keys('c').key_up(Keys.CONTROL).perform()

    time.sleep(3)

    win32clipboard.OpenClipboard()
    html_data = win32clipboard.GetClipboardData(win32clipboard.CF_UNICODETEXT)
    print(language["lang"])
    win32clipboard.CloseClipboard()

    with open("json/" + language["lang"] + ".json", "w", encoding="utf-8") as jsonfile:
        jsonfile.write(html_data)
    x = x + 1
driver.quit()