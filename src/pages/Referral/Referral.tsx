import { useEffect } from 'react';
import Tree from 'react-d3-tree';
import { useAppDispatch, useAppSelector } from '../../helpers/hooks/redux';
import { fetchTree } from '../../store/thunks/treeThunk';
import styles from './Referall.module.scss';

function Referral() {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.authReducer);
  const { tree } = useAppSelector((state) => state.treeReducer);

  useEffect(() => {
    dispatch(fetchTree(user?.id));
  }, [dispatch, user?.id]);

  return (
    <div id="treeWrapper" className={styles.referral}>
      <div className={styles.header}>
        <div>
          <p>Ваш баланс</p>
          <h2>{user?.balance}</h2>
        </div>
        <div>
          <h3>Реферальная система</h3>
          <p>Статус: {user?.status}</p>
        </div>
      </div>
      <div className={styles.tree}>
        <Tree
          separation={{
            siblings: 4,
            nonSiblings: 1,
          }}
          orientation={'vertical'}
          pathFunc="straight"
          data={tree}
        />
      </div>
    </div>
  );
}

export default Referral;
