import { Statistic } from 'antd';
import { useEffect, useState } from 'react';
import { Tree, TreeNode } from 'react-organizational-chart';
import BackBtn from '../../components/BackBtn/BackBtn';
import { useAppDispatch, useAppSelector } from '../../helpers/hooks/redux';
import { fetchReferral, fetchTree } from '../../store/thunks/treeThunk';
import { IReferralData } from '../../types/ITree';
import styles from './Referral.module.scss';

function Referral() {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.authReducer);
  const { tree } = useAppSelector((state) => state.treeReducer);

  const [fourAndFive, setFourAndFive] = useState<IReferralData | null>(null);
  const [sixAndSeven, setSixAndSeven] = useState<IReferralData | null>(null);
  const [eightAndNine, setEightAndNine] = useState<IReferralData | null>(null);
  const [tenAndEleven, setTenAndEleven] = useState<IReferralData | null>(null);
  const [twelveAndThirteen, setTwelveAndThirteen] = useState<IReferralData | null>(null);
  const [fourteenAndFifteen, setFourteenAndFifteen] = useState<IReferralData | null>(null);
  const [sixteenAndSeventeen, setSixteenAndSeventeen] = useState<IReferralData | null>(null);
  const [eighTeenAndNineteen, setEighTeenAndNineteen] = useState<IReferralData | null>(null);
  const [twentyAndTwentyOne, setTwentyAndTwentyOne] = useState<IReferralData | null>(null);
  const [twentyTwoAndTwentyThree, setTwentyTwoAndTwentyThree] = useState<IReferralData | null>(
    null
  );
  const [twentyFourAndTwentyFive, setTwentyFourAndTwentyFive] = useState<IReferralData | null>(
    null
  );
  const [twentySixAndTwentySeven, setTwentySixAndTwentySeven] = useState<IReferralData | null>(
    null
  );
  const [twentyEightAndTwentyNine, setTwentyEightAndTwentyNine] = useState<IReferralData | null>(
    null
  );
  const [thirtyAndTwentyThirtyOne, setThirtyAndTwentyThirtyOne] = useState<IReferralData | null>(
    null
  );

  const handleFetchTreeFourAndFive = async (id: number) => {
    const data = await dispatch(fetchTree(id));
    setFourAndFive(data.payload.payload);
  };

  const handleFetchTreeSixAndSeven = async (id: number) => {
    const data = await dispatch(fetchTree(id));
    setSixAndSeven(data.payload.payload);
  };

  const handleFetchTreeEightAndNine = async (id: number) => {
    const data = await dispatch(fetchTree(id));
    setEightAndNine(data.payload.payload);
  };

  const handleFetchTreeTenAndEleven = async (id: number) => {
    const data = await dispatch(fetchTree(id));
    setTenAndEleven(data.payload.payload);
  };

  const handleFetchTreeTwelveAndThirteen = async (id: number) => {
    const data = await dispatch(fetchTree(id));
    setTwelveAndThirteen(data.payload.payload);
  };

  const handleFetchTreeFourteenAndFifteen = async (id: number) => {
    const data = await dispatch(fetchTree(id));
    setFourteenAndFifteen(data.payload.payload);
  };

  const handleFetchTreeSixteenAndSeventeen = async (id: number) => {
    const data = await dispatch(fetchTree(id));
    setSixteenAndSeventeen(data.payload.payload);
  };

  const handleFetchTreeEighTeenAndNineteen = async (id: number) => {
    const data = await dispatch(fetchTree(id));
    setEighTeenAndNineteen(data.payload.payload);
  };

  const handleFetchTreeTwentyAndTwentyOne = async (id: number) => {
    const data = await dispatch(fetchTree(id));
    setTwentyAndTwentyOne(data.payload.payload);
  };

  const handleFetchTreeTwentyTwoAndTwentyThree = async (id: number) => {
    const data = await dispatch(fetchTree(id));
    setTwentyTwoAndTwentyThree(data.payload.payload);
  };

  const handleFetchTreeTwentyFourAndTwentyFive = async (id: number) => {
    const data = await dispatch(fetchTree(id));
    setTwentyFourAndTwentyFive(data.payload.payload);
  };

  const handleFetchTreeTwentySixAndTwentySeven = async (id: number) => {
    const data = await dispatch(fetchTree(id));
    setTwentySixAndTwentySeven(data.payload.payload);
  };

  const handleFetchTreeTwentyEightAndTwentyNine = async (id: number) => {
    const data = await dispatch(fetchTree(id));
    setTwentyEightAndTwentyNine(data.payload.payload);
  };

  const handleFetchTreeThirtyAndTwentyThirtyOne = async (id: number) => {
    const data = await dispatch(fetchTree(id));
    setThirtyAndTwentyThirtyOne(data.payload.payload);
  };

  useEffect(() => {
    dispatch(fetchReferral());
  }, [dispatch, user?.id]);

  return (
    <div id="treeWrapper" className={styles.referral}>
      <div className={styles.header}>
        <BackBtn />
        <div className={styles.info}>
          <Statistic
            title="Ваш баланс"
            value={user?.balance}
            precision={2}
            valueStyle={{ color: 'white' }}
            style={{ color: 'white' }}
          />

          <div>
            <h3>Реферальная система</h3>
            <p>Статус: {user?.status}</p>
          </div>
        </div>
      </div>
      <div className={styles.tree}>
        <Tree
          label={
            <div>
              {user?.first_name} {user?.last_name}
            </div>
          }
        >
          {tree?.referal_1 && (
            <TreeNode
              label={
                <div onClick={() => handleFetchTreeFourAndFive(tree?.referal1_id as number)}>
                  {tree?.referal_1.first_name} {tree?.referal_1.last_name}
                </div>
              }
            >
              {fourAndFive?.referal_1 && (
                <TreeNode
                  label={
                    <div onClick={() => handleFetchTreeEightAndNine(fourAndFive.referal1_id)}>
                      {fourAndFive.referal_1.first_name} {fourAndFive.referal_1.last_name}
                    </div>
                  }
                >
                  {eightAndNine?.referal_1 && (
                    <TreeNode
                      label={
                        <div
                          onClick={() =>
                            handleFetchTreeSixteenAndSeventeen(eightAndNine.referal1_id)
                          }
                        >
                          {eightAndNine.referal_1.first_name} {eightAndNine.referal_1.last_name}
                        </div>
                      }
                    >
                      {sixteenAndSeventeen?.referal_1 && (
                        <TreeNode
                          label={
                            <div>
                              {sixteenAndSeventeen.referal_1.first_name}
                              {sixteenAndSeventeen.referal_1.last_name}
                            </div>
                          }
                        ></TreeNode>
                      )}
                      {sixteenAndSeventeen?.referal_2 && (
                        <TreeNode
                          label={
                            <div>
                              {sixteenAndSeventeen.referal_2.first_name}
                              {sixteenAndSeventeen.referal_2.last_name}
                            </div>
                          }
                        ></TreeNode>
                      )}
                    </TreeNode>
                  )}
                  {eightAndNine?.referal_2 && (
                    <TreeNode
                      label={
                        <div
                          onClick={() =>
                            handleFetchTreeEighTeenAndNineteen(eightAndNine.referal2_id)
                          }
                        >
                          {eightAndNine.referal_2.first_name} {eightAndNine.referal_2.last_name}
                        </div>
                      }
                    >
                      {eighTeenAndNineteen?.referal_1 && (
                        <TreeNode
                          label={
                            <div>
                              {eighTeenAndNineteen.referal_1.first_name}
                              {eighTeenAndNineteen.referal_1.last_name}
                            </div>
                          }
                        ></TreeNode>
                      )}
                      {eighTeenAndNineteen?.referal_2 && (
                        <TreeNode
                          label={
                            <div>
                              {eighTeenAndNineteen.referal_2.first_name}
                              {eighTeenAndNineteen.referal_2.last_name}
                            </div>
                          }
                        ></TreeNode>
                      )}
                    </TreeNode>
                  )}
                </TreeNode>
              )}
              {fourAndFive?.referal_2 && (
                <TreeNode
                  label={
                    <div onClick={() => handleFetchTreeTenAndEleven(fourAndFive.referal2_id)}>
                      {fourAndFive.referal_2.first_name} {fourAndFive.referal_2.last_name}
                    </div>
                  }
                >
                  {tenAndEleven?.referal_1 && (
                    <TreeNode
                      label={
                        <div
                          onClick={() =>
                            handleFetchTreeTwentyAndTwentyOne(tenAndEleven.referal1_id)
                          }
                        >
                          {tenAndEleven.referal_1.first_name} {tenAndEleven.referal_1.last_name}
                        </div>
                      }
                    >
                      {twentyAndTwentyOne?.referal_1 && (
                        <TreeNode
                          label={
                            <div>
                              {twentyAndTwentyOne.referal_1.first_name}
                              {twentyAndTwentyOne.referal_1.last_name}
                            </div>
                          }
                        ></TreeNode>
                      )}
                      {twentyAndTwentyOne?.referal_2 && (
                        <TreeNode
                          label={
                            <div>
                              {twentyAndTwentyOne.referal_2.first_name}
                              {twentyAndTwentyOne.referal_2.last_name}
                            </div>
                          }
                        ></TreeNode>
                      )}
                    </TreeNode>
                  )}
                  {tenAndEleven?.referal_2 && (
                    <TreeNode
                      label={
                        <div
                          onClick={() =>
                            handleFetchTreeTwentyTwoAndTwentyThree(tenAndEleven?.referal2_id)
                          }
                        >
                          {tenAndEleven.referal_2.first_name} {tenAndEleven.referal_2.last_name}
                        </div>
                      }
                    >
                      {twentyTwoAndTwentyThree?.referal_1 && (
                        <TreeNode
                          label={
                            <div>
                              {twentyTwoAndTwentyThree.referal_1.first_name}
                              {twentyTwoAndTwentyThree.referal_1.last_name}
                            </div>
                          }
                        ></TreeNode>
                      )}
                      {twentyTwoAndTwentyThree?.referal_2 && (
                        <TreeNode
                          label={
                            <div>
                              {twentyTwoAndTwentyThree.referal_2.first_name}
                              {twentyTwoAndTwentyThree.referal_2.last_name}
                            </div>
                          }
                        ></TreeNode>
                      )}
                    </TreeNode>
                  )}
                </TreeNode>
              )}
            </TreeNode>
          )}
          {tree?.referal_2 && (
            <TreeNode
              label={
                <div onClick={() => handleFetchTreeSixAndSeven(tree.referal2_id)}>
                  {tree?.referal_2.first_name} {tree?.referal_2.last_name}
                </div>
              }
            >
              {sixAndSeven?.referal_1 && (
                <TreeNode
                  label={
                    <div onClick={() => handleFetchTreeTwelveAndThirteen(sixAndSeven.referal1_id)}>
                      {sixAndSeven?.referal_1.first_name} {sixAndSeven?.referal_1.last_name}
                    </div>
                  }
                >
                  {twelveAndThirteen?.referal_1 && (
                    <TreeNode
                      label={
                        <div
                          onClick={() =>
                            handleFetchTreeTwentyFourAndTwentyFive(twelveAndThirteen?.referal1_id)
                          }
                        >
                          {twelveAndThirteen?.referal_1.first_name}
                          {twelveAndThirteen?.referal_1.last_name}
                        </div>
                      }
                    >
                      {twentyFourAndTwentyFive?.referal_1 && (
                        <TreeNode
                          label={
                            <div>
                              {twentyFourAndTwentyFive.referal_1.first_name}
                              {twentyFourAndTwentyFive.referal_1.last_name}
                            </div>
                          }
                        ></TreeNode>
                      )}
                      {twentyFourAndTwentyFive?.referal_2 && (
                        <TreeNode
                          label={
                            <div>
                              {twentyFourAndTwentyFive.referal_2.first_name}
                              {twentyFourAndTwentyFive.referal_2.last_name}
                            </div>
                          }
                        ></TreeNode>
                      )}
                    </TreeNode>
                  )}
                  {twelveAndThirteen?.referal_2 && (
                    <TreeNode
                      label={
                        <div
                          onClick={() =>
                            handleFetchTreeTwentySixAndTwentySeven(twelveAndThirteen?.referal2_id)
                          }
                        >
                          {twelveAndThirteen?.referal_2.first_name}
                          {twelveAndThirteen?.referal_2.last_name}
                        </div>
                      }
                    >
                      {twentySixAndTwentySeven?.referal_1 && (
                        <TreeNode
                          label={
                            <div>
                              {twentySixAndTwentySeven.referal_1.first_name}
                              {twentySixAndTwentySeven.referal_1.last_name}
                            </div>
                          }
                        ></TreeNode>
                      )}
                      {twentySixAndTwentySeven?.referal_2 && (
                        <TreeNode
                          label={
                            <div>
                              {twentySixAndTwentySeven.referal_2.first_name}
                              {twentySixAndTwentySeven.referal_2.last_name}
                            </div>
                          }
                        ></TreeNode>
                      )}
                    </TreeNode>
                  )}
                </TreeNode>
              )}
              {sixAndSeven?.referal_2 && (
                <TreeNode
                  label={
                    <div onClick={() => handleFetchTreeFourteenAndFifteen(sixAndSeven.referal2_id)}>
                      {sixAndSeven?.referal_2.first_name} {sixAndSeven?.referal_2.last_name}
                    </div>
                  }
                >
                  {fourteenAndFifteen?.referal_1 && (
                    <TreeNode
                      label={
                        <div
                          onClick={() =>
                            handleFetchTreeTwentyEightAndTwentyNine(fourteenAndFifteen?.referal1_id)
                          }
                        >
                          {fourteenAndFifteen.referal_1.first_name}
                          {fourteenAndFifteen.referal_1.last_name}
                        </div>
                      }
                    >
                      {twentyEightAndTwentyNine?.referal_1 && (
                        <TreeNode
                          label={
                            <div>
                              {twentyEightAndTwentyNine.referal_1.first_name}
                              {twentyEightAndTwentyNine.referal_1.last_name}
                            </div>
                          }
                        ></TreeNode>
                      )}
                      {twentyEightAndTwentyNine?.referal_2 && (
                        <TreeNode
                          label={
                            <div>
                              {twentyEightAndTwentyNine.referal_2.first_name}
                              {twentyEightAndTwentyNine.referal_2.last_name}
                            </div>
                          }
                        ></TreeNode>
                      )}
                    </TreeNode>
                  )}
                  {fourteenAndFifteen?.referal_2 && (
                    <TreeNode
                      label={
                        <div
                          onClick={() =>
                            handleFetchTreeThirtyAndTwentyThirtyOne(fourteenAndFifteen?.referal2_id)
                          }
                        >
                          {fourteenAndFifteen.referal_2.first_name}
                          {fourteenAndFifteen.referal_2.last_name}
                        </div>
                      }
                    >
                      {thirtyAndTwentyThirtyOne?.referal_1 && (
                        <TreeNode
                          label={
                            <div>
                              {thirtyAndTwentyThirtyOne.referal_1.first_name}
                              {thirtyAndTwentyThirtyOne.referal_1.last_name}
                            </div>
                          }
                        ></TreeNode>
                      )}
                      {thirtyAndTwentyThirtyOne?.referal_2 && (
                        <TreeNode
                          label={
                            <div>
                              {thirtyAndTwentyThirtyOne.referal_2.first_name}
                              {thirtyAndTwentyThirtyOne.referal_2.last_name}
                            </div>
                          }
                        ></TreeNode>
                      )}
                    </TreeNode>
                  )}
                </TreeNode>
              )}
            </TreeNode>
          )}
        </Tree>
      </div>
    </div>
  );
}

export default Referral;
