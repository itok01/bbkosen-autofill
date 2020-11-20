import React, { useEffect, useState } from 'react';
import { browser } from 'webextension-polyfill-ts';

const Options: React.FC = () => {
  const [org, setOrg] = useState('');
  const [autoSubmit, setAutoSubmit] = useState(false);

  useEffect(() => {
    const result = browser.storage.local.get(['org', 'autoSubmit']);
    result.then((value) => {
      if (value['org']) {
        setOrg(value['org']);
      }
      if (value['autoSubmit']) {
        setAutoSubmit(value['autoSubmit']);
      }
    });
  }, []);

  const setOptions = () => {
    browser.storage.local.set({
      org: org,
      autoSubmit: autoSubmit
    });
  };

  return (
    <form onSubmit={setOptions}>
      <label>
        所属機関:
        <input type="text" value={org} onChange={(e) => setOrg(e.target.value)} />
      </label>
      <label>
        自動で次に進む:
        <input type="checkbox" checked={autoSubmit} onChange={(e) => setAutoSubmit(e.target.checked)} />
      </label>
      <input type="submit" />
    </form>
  );
};

export default Options;
