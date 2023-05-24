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
  const [mainUser, setMainUser] = useState<any>();
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
  const [thirtyAndThirtyOne, setThirtyAndThirtyOne] = useState<IReferralData | null>(null);
  const [thirtyTwoAndThirtyThree, setThirtyTwoAndThirtyThree] = useState<IReferralData | null>(
    null
  );
  const [thirtyFourAndThirtyFive, setThirtyFourAndThirtyFive] = useState<IReferralData | null>(
    null
  );
  const [thirtySixAndThirtySeven, setThirtySixThirtySeven] = useState<IReferralData | null>(null);
  const [thirtyEightThirtyNine, setThirtyEightThirtyNine] = useState<IReferralData | null>(null);
  const [fourtyAndFourtyOne, setFourtyAndFourtyOne] = useState<IReferralData | null>(null);
  const [fourtyTwoAndFourtyThree, setFourtyTwoAndFourtyThree] = useState<IReferralData | null>(
    null
  );
  const [fourtyFourAndFourtyFive, setFourtyFourAndFourtyFive] = useState<IReferralData | null>(
    null
  );
  const [fourtySixAndFourtySeven, setFourtySixAndFourtySeven] = useState<IReferralData | null>(
    null
  );
  const [fourtyEightAndFourtyNine, setFourtyEightAndFourtyNine] = useState<IReferralData | null>(
    null
  );
  const [fiftyAndFiftyOne, setFiftyAndFiftyOne] = useState<IReferralData | null>(null);
  const [fiftyTwoAndFiftyThree, setFiftyTwoAndFiftyThree] = useState<IReferralData | null>(null);
  const [fiftyFourAndFiftyFive, setFiftyFourAndFiftyFive] = useState<IReferralData | null>(null);
  const [fiftySixAndFiftySeven, setFiftySixAndFiftySeven] = useState<IReferralData | null>(null);
  const [fiftyEightAndFiftyNine, setFiftyEightAndFiftyNine] = useState<IReferralData | null>(null);
  const [sixtyAndSixtyOne, setSixtyAndSixtyOne] = useState<IReferralData | null>(null);
  const [sixtyTwoAndSixtyThree, setSixtyTwoAndSixtyThree] = useState<IReferralData | null>(null);

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

  const handleFetchTreeThirtyAndThirtyOne = async (id: number) => {
    const data = await dispatch(fetchTree(id));
    setThirtyAndThirtyOne(data.payload.payload);
  };

  const handleFetchTreeThirtyTwoAndThirtyThree = async (id: number) => {
    const data = await dispatch(fetchTree(id));
    setThirtyTwoAndThirtyThree(data.payload.payload);
  };
  const handleFetchTreeThirtyFourAndThirtyFive = async (id: number) => {
    const data = await dispatch(fetchTree(id));
    setThirtyFourAndThirtyFive(data.payload.payload);
  };
  const handleFetchTreeThirtySixAndThirtySeven = async (id: number) => {
    const data = await dispatch(fetchTree(id));
    setThirtySixThirtySeven(data.payload.payload);
  };
  const handleFetchTreeThirtyEightAndThirtyNine = async (id: number) => {
    const data = await dispatch(fetchTree(id));
    setThirtyEightThirtyNine(data.payload.payload);
  };
  const handleFetchTreeFourtyAndFourtyOne = async (id: number) => {
    const data = await dispatch(fetchTree(id));
    setFourtyAndFourtyOne(data.payload.payload);
  };
  const handleFetchTreeFourtyTwoAndFourtyThree = async (id: number) => {
    const data = await dispatch(fetchTree(id));
    setFourtyTwoAndFourtyThree(data.payload.payload);
  };
  const handleFetchTreeFourtyFourAndFourtyFive = async (id: number) => {
    const data = await dispatch(fetchTree(id));
    setFourtyFourAndFourtyFive(data.payload.payload);
  };
  const handleFetchTreeFourtySixAndFourtySeven = async (id: number) => {
    const data = await dispatch(fetchTree(id));
    setFourtySixAndFourtySeven(data.payload.payload);
  };
  const handleFetchTreeFourtyEightAndFourtyNine = async (id: number) => {
    const data = await dispatch(fetchTree(id));
    setFourtyEightAndFourtyNine(data.payload.payload);
  };
  const handleFetchTreeFiftyAndFiftyOne = async (id: number) => {
    const data = await dispatch(fetchTree(id));
    setFiftyAndFiftyOne(data.payload.payload);
  };
  const handleFetchTreeFiftyTwoAndFiftyThree = async (id: number) => {
    const data = await dispatch(fetchTree(id));
    setFiftyTwoAndFiftyThree(data.payload.payload);
  };
  const handleFetchTreeFiftyFourAndFiftyFive = async (id: number) => {
    const data = await dispatch(fetchTree(id));
    setFiftyFourAndFiftyFive(data.payload.payload);
  };
  const handleFetchTreeFiftySixAndFiftySeven = async (id: number) => {
    const data = await dispatch(fetchTree(id));
    setFiftySixAndFiftySeven(data.payload.payload);
  };
  const handleFetchTreeFiftyEightAndFiftyNine = async (id: number) => {
    const data = await dispatch(fetchTree(id));
    setFiftyEightAndFiftyNine(data.payload.payload);
  };
  const handleFetchTreeSixtyAndSixtyOne = async (id: number) => {
    const data = await dispatch(fetchTree(id));
    setSixtyAndSixtyOne(data.payload.payload);
  };
  const handleFetchTreeSixtyTwoAndSixtyThree = async (id: number) => {
    const data = await dispatch(fetchTree(id));
    setSixtyTwoAndSixtyThree(data.payload.payload);
  };

  useEffect(() => {
    dispatch(fetchReferral());
    setMainUser({ firstName: user.first_name, lastName: user.last_name });
  }, [dispatch, user.first_name, user.id, user.last_name]);

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
              24
              {mainUser?.firstName} {mainUser?.lastName}
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
                            <div
                              onClick={() =>
                                handleFetchTreeThirtyTwoAndThirtyThree(
                                  sixteenAndSeventeen.referal1_id
                                )
                              }
                            >
                              {sixteenAndSeventeen.referal_1.first_name}
                              {sixteenAndSeventeen.referal_1.last_name}
                            </div>
                          }
                        >
                          {thirtyTwoAndThirtyThree?.referal_1 && (
                            <TreeNode
                              label={
                                <div>
                                  {thirtyTwoAndThirtyThree.referal_1.first_name}
                                  {thirtyTwoAndThirtyThree.referal_1.last_name}
                                </div>
                              }
                            ></TreeNode>
                          )}
                          {thirtyTwoAndThirtyThree?.referal_2 && (
                            <TreeNode
                              label={
                                <div>
                                  {thirtyTwoAndThirtyThree.referal_2.first_name}
                                  {thirtyTwoAndThirtyThree.referal_2.last_name}
                                </div>
                              }
                            ></TreeNode>
                          )}
                        </TreeNode>
                      )}
                      {sixteenAndSeventeen?.referal_2 && (
                        <TreeNode
                          label={
                            <div
                              onClick={() =>
                                handleFetchTreeThirtyFourAndThirtyFive(
                                  sixteenAndSeventeen.referal2_id
                                )
                              }
                            >
                              {sixteenAndSeventeen.referal_2.first_name}
                              {sixteenAndSeventeen.referal_2.last_name}
                            </div>
                          }
                        >
                          {thirtyFourAndThirtyFive?.referal_1 && (
                            <TreeNode
                              label={
                                <div>
                                  {thirtyFourAndThirtyFive.referal_1.first_name}
                                  {thirtyFourAndThirtyFive.referal_1.last_name}
                                </div>
                              }
                            ></TreeNode>
                          )}
                          {thirtyFourAndThirtyFive?.referal_2 && (
                            <TreeNode
                              label={
                                <div>
                                  {thirtyFourAndThirtyFive.referal_2.first_name}
                                  {thirtyFourAndThirtyFive.referal_2.last_name}
                                </div>
                              }
                            ></TreeNode>
                          )}
                        </TreeNode>
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
                            <div
                              onClick={() =>
                                handleFetchTreeThirtySixAndThirtySeven(
                                  eighTeenAndNineteen.referal1_id
                                )
                              }
                            >
                              {eighTeenAndNineteen.referal_1.first_name}
                              {eighTeenAndNineteen.referal_1.last_name}
                            </div>
                          }
                        >
                          {thirtySixAndThirtySeven?.referal_1 && (
                            <TreeNode
                              label={
                                <div>
                                  {thirtySixAndThirtySeven.referal_1.first_name}
                                  {thirtySixAndThirtySeven.referal_1.last_name}
                                </div>
                              }
                            ></TreeNode>
                          )}
                          {thirtySixAndThirtySeven?.referal_2 && (
                            <TreeNode
                              label={
                                <div>
                                  {thirtySixAndThirtySeven.referal_2.first_name}
                                  {thirtySixAndThirtySeven.referal_2.last_name}
                                </div>
                              }
                            ></TreeNode>
                          )}
                        </TreeNode>
                      )}
                      {eighTeenAndNineteen?.referal_2 && (
                        <TreeNode
                          label={
                            <div
                              onClick={() =>
                                handleFetchTreeThirtyEightAndThirtyNine(
                                  eighTeenAndNineteen.referal2_id
                                )
                              }
                            >
                              {eighTeenAndNineteen.referal_2.first_name}
                              {eighTeenAndNineteen.referal_2.last_name}
                            </div>
                          }
                        >
                          {thirtyEightThirtyNine?.referal_1 && (
                            <TreeNode
                              label={
                                <div>
                                  {thirtyEightThirtyNine.referal_1.first_name}
                                  {thirtyEightThirtyNine.referal_1.last_name}
                                </div>
                              }
                            ></TreeNode>
                          )}
                          {thirtyEightThirtyNine?.referal_2 && (
                            <TreeNode
                              label={
                                <div>
                                  {thirtyEightThirtyNine.referal_2.first_name}
                                  {thirtyEightThirtyNine.referal_2.last_name}
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
                            <div
                              onClick={() =>
                                handleFetchTreeFourtyAndFourtyOne(twentyAndTwentyOne.referal1_id)
                              }
                            >
                              {twentyAndTwentyOne.referal_1.first_name}
                              {twentyAndTwentyOne.referal_1.last_name}
                            </div>
                          }
                        >
                          {fourtyAndFourtyOne?.referal_1 && (
                            <TreeNode
                              label={
                                <div>
                                  {fourtyAndFourtyOne.referal_1.first_name}
                                  {fourtyAndFourtyOne.referal_1.last_name}
                                </div>
                              }
                            ></TreeNode>
                          )}
                          {fourtyAndFourtyOne?.referal_2 && (
                            <TreeNode
                              label={
                                <div>
                                  {fourtyAndFourtyOne.referal_2.first_name}
                                  {fourtyAndFourtyOne.referal_2.last_name}
                                </div>
                              }
                            ></TreeNode>
                          )}
                        </TreeNode>
                      )}
                      {twentyAndTwentyOne?.referal_2 && (
                        <TreeNode
                          label={
                            <div
                              onClick={() =>
                                handleFetchTreeFourtyTwoAndFourtyThree(
                                  twentyAndTwentyOne.referal2_id
                                )
                              }
                            >
                              {twentyAndTwentyOne.referal_2.first_name}
                              {twentyAndTwentyOne.referal_2.last_name}
                            </div>
                          }
                        >
                          {fourtyTwoAndFourtyThree?.referal_1 && (
                            <TreeNode
                              label={
                                <div>
                                  {fourtyTwoAndFourtyThree.referal_1.first_name}
                                  {fourtyTwoAndFourtyThree.referal_1.last_name}
                                </div>
                              }
                            ></TreeNode>
                          )}
                          {fourtyTwoAndFourtyThree?.referal_2 && (
                            <TreeNode
                              label={
                                <div>
                                  {fourtyTwoAndFourtyThree.referal_2.first_name}
                                  {fourtyTwoAndFourtyThree.referal_2.last_name}
                                </div>
                              }
                            ></TreeNode>
                          )}
                        </TreeNode>
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
                            <div
                              onClick={() =>
                                handleFetchTreeFourtyFourAndFourtyFive(
                                  twentyTwoAndTwentyThree.referal1_id
                                )
                              }
                            >
                              {twentyTwoAndTwentyThree.referal_1.first_name}
                              {twentyTwoAndTwentyThree.referal_1.last_name}
                            </div>
                          }
                        >
                          {fourtyFourAndFourtyFive?.referal_1 && (
                            <TreeNode
                              label={
                                <div>
                                  {fourtyFourAndFourtyFive.referal_1.first_name}
                                  {fourtyFourAndFourtyFive.referal_1.last_name}
                                </div>
                              }
                            ></TreeNode>
                          )}
                          {fourtyFourAndFourtyFive?.referal_2 && (
                            <TreeNode
                              label={
                                <div>
                                  {fourtyFourAndFourtyFive.referal_2.first_name}
                                  {fourtyFourAndFourtyFive.referal_2.last_name}
                                </div>
                              }
                            ></TreeNode>
                          )}
                        </TreeNode>
                      )}
                      {twentyTwoAndTwentyThree?.referal_2 && (
                        <TreeNode
                          label={
                            <div
                              onClick={() =>
                                handleFetchTreeFourtySixAndFourtySeven(
                                  twentyTwoAndTwentyThree.referal2_id
                                )
                              }
                            >
                              {twentyTwoAndTwentyThree.referal_2.first_name}
                              {twentyTwoAndTwentyThree.referal_2.last_name}
                            </div>
                          }
                        >
                          {fourtySixAndFourtySeven?.referal_1 && (
                            <TreeNode
                              label={
                                <div>
                                  {fourtySixAndFourtySeven.referal_1.first_name}
                                  {fourtySixAndFourtySeven.referal_1.last_name}
                                </div>
                              }
                            ></TreeNode>
                          )}
                          {fourtySixAndFourtySeven?.referal_2 && (
                            <TreeNode
                              label={
                                <div>
                                  {fourtySixAndFourtySeven.referal_2.first_name}
                                  {fourtySixAndFourtySeven.referal_2.last_name}
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
                            <div
                              onClick={() =>
                                handleFetchTreeFourtyEightAndFourtyNine(
                                  twentyFourAndTwentyFive.referal1_id
                                )
                              }
                            >
                              {twentyFourAndTwentyFive.referal_1.first_name}
                              {twentyFourAndTwentyFive.referal_1.last_name}
                            </div>
                          }
                        >
                          {fourtyEightAndFourtyNine?.referal_1 && (
                            <TreeNode
                              label={
                                <div>
                                  {fourtyEightAndFourtyNine.referal_1.first_name}
                                  {fourtyEightAndFourtyNine.referal_1.last_name}
                                </div>
                              }
                            ></TreeNode>
                          )}
                          {fourtyEightAndFourtyNine?.referal_2 && (
                            <TreeNode
                              label={
                                <div>
                                  {fourtyEightAndFourtyNine.referal_2.first_name}
                                  {fourtyEightAndFourtyNine.referal_2.last_name}
                                </div>
                              }
                            ></TreeNode>
                          )}
                        </TreeNode>
                      )}
                      {twentyFourAndTwentyFive?.referal_2 && (
                        <TreeNode
                          label={
                            <div
                              onClick={() =>
                                handleFetchTreeFiftyAndFiftyOne(twentyFourAndTwentyFive.referal2_id)
                              }
                            >
                              {twentyFourAndTwentyFive.referal_2.first_name}
                              {twentyFourAndTwentyFive.referal_2.last_name}
                            </div>
                          }
                        >
                          {fiftyAndFiftyOne?.referal_1 && (
                            <TreeNode
                              label={
                                <div>
                                  {fiftyAndFiftyOne.referal_1.first_name}
                                  {fiftyAndFiftyOne.referal_1.last_name}
                                </div>
                              }
                            ></TreeNode>
                          )}
                          {fiftyAndFiftyOne?.referal_2 && (
                            <TreeNode
                              label={
                                <div>
                                  {fiftyAndFiftyOne.referal_2.first_name}
                                  {fiftyAndFiftyOne.referal_2.last_name}
                                </div>
                              }
                            ></TreeNode>
                          )}
                        </TreeNode>
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
                            <div
                              onClick={() =>
                                handleFetchTreeFiftyTwoAndFiftyThree(
                                  twentySixAndTwentySeven.referal1_id
                                )
                              }
                            >
                              {twentySixAndTwentySeven.referal_1.first_name}
                              {twentySixAndTwentySeven.referal_1.last_name}
                            </div>
                          }
                        >
                          {fiftyTwoAndFiftyThree?.referal_1 && (
                            <TreeNode
                              label={
                                <div>
                                  {fiftyTwoAndFiftyThree.referal_1.first_name}
                                  {fiftyTwoAndFiftyThree.referal_1.last_name}
                                </div>
                              }
                            ></TreeNode>
                          )}
                          {fiftyTwoAndFiftyThree?.referal_2 && (
                            <TreeNode
                              label={
                                <div>
                                  {fiftyTwoAndFiftyThree.referal_2.first_name}
                                  {fiftyTwoAndFiftyThree.referal_2.last_name}
                                </div>
                              }
                            ></TreeNode>
                          )}
                        </TreeNode>
                      )}
                      {twentySixAndTwentySeven?.referal_2 && (
                        <TreeNode
                          label={
                            <div
                              onClick={() =>
                                handleFetchTreeFiftyFourAndFiftyFive(
                                  twentySixAndTwentySeven.referal2_id
                                )
                              }
                            >
                              {twentySixAndTwentySeven.referal_2.first_name}
                              {twentySixAndTwentySeven.referal_2.last_name}
                            </div>
                          }
                        >
                          {fiftyFourAndFiftyFive?.referal_1 && (
                            <TreeNode
                              label={
                                <div>
                                  {fiftyFourAndFiftyFive.referal_1.first_name}
                                  {fiftyFourAndFiftyFive.referal_1.last_name}
                                </div>
                              }
                            ></TreeNode>
                          )}
                          {fiftyFourAndFiftyFive?.referal_2 && (
                            <TreeNode
                              label={
                                <div>
                                  {fiftyFourAndFiftyFive.referal_2.first_name}
                                  {fiftyFourAndFiftyFive.referal_2.last_name}
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
                            <div
                              onClick={() =>
                                handleFetchTreeFiftySixAndFiftySeven(
                                  twentyEightAndTwentyNine.referal1_id
                                )
                              }
                            >
                              {twentyEightAndTwentyNine.referal_1.first_name}
                              {twentyEightAndTwentyNine.referal_1.last_name}
                            </div>
                          }
                        >
                          {fiftySixAndFiftySeven?.referal_1 && (
                            <TreeNode
                              label={
                                <div>
                                  {fiftySixAndFiftySeven.referal_1.first_name}
                                  {fiftySixAndFiftySeven.referal_1.last_name}
                                </div>
                              }
                            ></TreeNode>
                          )}
                          {fiftySixAndFiftySeven?.referal_2 && (
                            <TreeNode
                              label={
                                <div>
                                  {fiftySixAndFiftySeven.referal_2.first_name}
                                  {fiftySixAndFiftySeven.referal_2.last_name}
                                </div>
                              }
                            ></TreeNode>
                          )}
                        </TreeNode>
                      )}
                      {twentyEightAndTwentyNine?.referal_2 && (
                        <TreeNode
                          label={
                            <div
                              onClick={() =>
                                handleFetchTreeFiftyEightAndFiftyNine(
                                  twentyEightAndTwentyNine.referal2_id
                                )
                              }
                            >
                              {twentyEightAndTwentyNine.referal_2.first_name}
                              {twentyEightAndTwentyNine.referal_2.last_name}
                            </div>
                          }
                        >
                          {fiftyEightAndFiftyNine?.referal_1 && (
                            <TreeNode
                              label={
                                <div>
                                  {fiftyEightAndFiftyNine.referal_1.first_name}
                                  {fiftyEightAndFiftyNine.referal_1.last_name}
                                </div>
                              }
                            ></TreeNode>
                          )}
                          {fiftyEightAndFiftyNine?.referal_2 && (
                            <TreeNode
                              label={
                                <div>
                                  {fiftyEightAndFiftyNine.referal_2.first_name}
                                  {fiftyEightAndFiftyNine.referal_2.last_name}
                                </div>
                              }
                            ></TreeNode>
                          )}
                        </TreeNode>
                      )}
                    </TreeNode>
                  )}
                  {fourteenAndFifteen?.referal_2 && (
                    <TreeNode
                      label={
                        <div
                          onClick={() =>
                            handleFetchTreeThirtyAndThirtyOne(fourteenAndFifteen?.referal2_id)
                          }
                        >
                          {fourteenAndFifteen.referal_2.first_name}
                          {fourteenAndFifteen.referal_2.last_name}
                        </div>
                      }
                    >
                      {thirtyAndThirtyOne?.referal_1 && (
                        <TreeNode
                          label={
                            <div
                              onClick={() =>
                                handleFetchTreeSixtyAndSixtyOne(thirtyAndThirtyOne.referal1_id)
                              }
                            >
                              {thirtyAndThirtyOne.referal_1.first_name}
                              {thirtyAndThirtyOne.referal_1.last_name}
                            </div>
                          }
                        >
                          {sixtyAndSixtyOne?.referal_1 && (
                            <TreeNode
                              label={
                                <div>
                                  {sixtyAndSixtyOne.referal_1.first_name}
                                  {sixtyAndSixtyOne.referal_1.last_name}
                                </div>
                              }
                            ></TreeNode>
                          )}
                          {sixtyAndSixtyOne?.referal_2 && (
                            <TreeNode
                              label={
                                <div>
                                  {sixtyAndSixtyOne.referal_2.first_name}
                                  {sixtyAndSixtyOne.referal_2.last_name}
                                </div>
                              }
                            ></TreeNode>
                          )}
                        </TreeNode>
                      )}
                      {thirtyAndThirtyOne?.referal_2 && (
                        <TreeNode
                          label={
                            <div
                              onClick={() =>
                                handleFetchTreeSixtyTwoAndSixtyThree(thirtyAndThirtyOne.referal2_id)
                              }
                            >
                              {thirtyAndThirtyOne.referal_2.first_name}
                              {thirtyAndThirtyOne.referal_2.last_name}
                            </div>
                          }
                        >
                          {sixtyTwoAndSixtyThree?.referal_1 && (
                            <TreeNode
                              label={
                                <div>
                                  {sixtyTwoAndSixtyThree.referal_1.first_name}
                                  {sixtyTwoAndSixtyThree.referal_1.last_name}
                                </div>
                              }
                            ></TreeNode>
                          )}
                          {sixtyTwoAndSixtyThree?.referal_2 && (
                            <TreeNode
                              label={
                                <div>
                                  {sixtyTwoAndSixtyThree.referal_2.first_name}
                                  {sixtyTwoAndSixtyThree.referal_2.last_name}
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
            </TreeNode>
          )}
        </Tree>
      </div>
    </div>
  );
}

export default Referral;
