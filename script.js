let selectedOption = 'b1g2';

function handleRadioChange(src) {
  selectedOption = src.value;
  const discountBanner = document.body.querySelectorAll('.discount_container');
  const radioButtons = document.body.querySelectorAll('.radio_btn');
  const percentOffLabels = document.body.querySelectorAll('.percent_off_label');
  const discountedAmounts =
    document.body.querySelectorAll('.discounted_amount');
  const settingsContainer = document.body.querySelectorAll(
    '.settings_container'
  );

  for (let i = 0; i < discountBanner.length; i++) {
    let discountElem = discountBanner[i];
    let radioButtonElem = radioButtons[i];
    let percentOffLabel = percentOffLabels[i];
    let discountedAmount = discountedAmounts[i];
    let settingContainer = settingsContainer[i];

    discountElem.style.display = 'block';
    radioButtonElem.style.padding = 0;
    radioButtonElem.style.border = 'none';
    radioButtonElem.style.borderRadius = '0 12px 12px 0';
    radioButtonElem.style.background = '#fff';
    percentOffLabel.style.display = 'none';
    discountedAmount.style.display = 'none';
    settingContainer.style.display = 'none';
  }

  const selectedDiscountBanner = document.getElementById(
    `discount_${src.value}`
  );

  const selectedRadioButton = document.getElementById(`radio_btn_${src.value}`);
  const selectedPercentOffLabel = document.getElementById(
    `percent_off_${src.value}`
  );
  const selectedDiscountedAmount = document.getElementById(
    `discounted_amount_${src.value}`
  );
  const selectedSettingsContainer = document.getElementById(
    `settings_container_${src.value}`
  );

  selectedDiscountBanner.style.display = 'none';
  selectedRadioButton.style.padding = 25;
  selectedRadioButton.style.border = '1px solid #FF6B82';
  selectedRadioButton.style.borderRadius = '12px';
  selectedRadioButton.style.background = '#FFF9FA';
  selectedPercentOffLabel.style.display = 'block';
  selectedDiscountedAmount.style.display = 'block';
  selectedSettingsContainer.style.display = 'grid';
}
