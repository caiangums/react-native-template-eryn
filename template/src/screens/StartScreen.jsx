import React, { useEffect } from 'react';

import { Loader } from '_components';
import { wait } from '_utils/functions';

function StartScreen({ navigation }) {
  useEffect(() => {
    const loaded = async () => {
      await wait(2);

      navigation.navigate('Welcome');
    };

    loaded();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <Loader />;
}

export default StartScreen;
