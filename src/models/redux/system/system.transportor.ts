import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { systemActions, systemInitialState } from '@models/redux/system/system.slice';

export const systemTransportor = () => {
    // ### store
    const store = () => useSelector((state: { system: systemInitialState }) => state.system, shallowEqual)
    // ### Actions
    const dispatch = useDispatch()
    // @@@ Redux actions
    const setSystemStore = (payload: any) => dispatch(systemActions.setSystemStore(payload))

    return {
        // ### store
        systemStore: store,
        // ### redux
        setSystemStore,

    }
};
