const storageKey = 'keywordList';

const getStorageData = key => {
  return new Promise(resolve => {
    chrome.storage.local.get(key, value => {
      resolve(value);
    });
  });
};

const setStorageData = (key, value) => {
  return new Promise(resolve => {
    chrome.storage.local.set(
      {
        [key]: value,
      },
      () => {
        resolve();
      },
    );
  });
};

// Save Settings
document.querySelector('#save-button').addEventListener('click', async () => {
  const inputData = document.querySelector('#keyword-list textArea').value;
  const keywords = inputData.split('\n').filter(x => x !== '');
  await setStorageData(storageKey, keywords);
  document.querySelector('#result-dialog').showModal();
});

// Close Dialog
document.querySelector('#result-dialog .close').addEventListener('click', () => {
  document.querySelector('dialog').close();
});

const init = async () => {
  const storageData = await getStorageData(storageKey);
  const keywordList = storageData[storageKey];

  const textArea = document.querySelector('#keyword-list textArea');
  textArea.value = keywordList.join('\n');
};

init();
