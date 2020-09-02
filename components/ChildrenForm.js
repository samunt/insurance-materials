import React, { useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { DispatchContext, FormContext } from "../contexts/FormContext";
import {QuestionCircle, Trash} from 'react-bootstrap-icons';
import {Modal, ProgressBar, Button} from "react-bootstrap";
import {Grid, Container, CssBaseline, TextField, makeStyles, Input, InputLabel, FormControl} from '@material-ui/core';


export default function ChildrenForm() {
	const [hasChildren, updateHasChildren] = useState();
	const [numberOfChildren, updateNumberOfChildren] = useState([
		{ id: 1, age: '' }
	]);
    const [isNext, setIsNext] = useState(true);
	// modal stuff
	const [showTitle, setShowTitle] = useState(false);
	const handleCloseTitle = () => setShowTitle(false);
	const [showHowOld, setShowHowOld] = useState(false);
	const handleCloseHowOld = () => setShowHowOld(false);
	const form = useContext(FormContext);
	const [showAskAboutChildren, setShowAskAboutChildren] = useState(false);
	const handleCloseAskAboutChildren = () => setShowAskAboutChildren(false);
	const [showPlanningOnKids, setShowPlanningOnKids] = useState(false);
	const handleClosePlanningOnKids = () => setShowPlanningOnKids(false);

	const now = 15;

	useEffect(() => {

        if(hasChildren !== form.hasChildren){
			updateHasChildren(form.hasChildren);
			document.getElementById('child-yes').classList.add('active_button');
        }

        if(numberOfChildren !== form.childrenAgeArray){
            updateNumberOfChildren(form.childrenAgeArray);
        }

	}, []);
	
    useEffect(() => {
        if(hasChildren !== false){
			if(numberOfChildren && numberOfChildren !== { id: 1, age: '' }){
				setIsNext(true)
				numberOfChildren.map((child)=>{
					if(child.age !== ''){
						setIsNext(false);
					}
				})
			}else{
				setIsNext(true);
			}
        }else{
            setIsNext(true);
		}
		dispatch({ type: "NUMBER_OF_CHILDREN", numberOfChildren: numberOfChildren.length });
		dispatch({ type: "CHILDREN_AGE_ARRAY", childrenAgeArray: numberOfChildren });
	}, [hasChildren, numberOfChildren]);

	const useStyles = makeStyles((theme) => ({
		root: {
		  display: 'flex',
		  flexWrap: 'wrap',
		},
		withoutLabel: {
		  marginTop: theme.spacing(3),
		},
		textField: {
		  width: '25ch',
		},
	}));
	
	const classes = useStyles();
	
	const dispatch = useContext(DispatchContext);
	const router = useRouter();

	// useEffect(() => {
	// 	dispatch({ type: "CHILDREN_AGE_ARRAY", childrenAgeArray: numberOfChildren });
	// 	dispatch({ type: "NUMBER_OF_CHILDREN", numberOfChildren: numberOfChildren.length - 1 });
	// }, [numberOfChildren]);

	// useEffect(() => {
	// 	dispatch({ type: "HAS_CHILDREN", hasChildren: false });
	// }, [hasChildren]);

	// Update numberOfChildren state
	function updateData(e, id) {
		// Grab the id of the input element and the typed value
		const { value } = e.target;
		// Find the item in the array that has the same id
		// Convert the grabed id from string to Number
		const itemIndex = numberOfChildren.findIndex(
			item => item.id === Number(id)
		);

		// If the itemIndex is -1 that means it doesn't exist in the array
		if (itemIndex !== -1) {
			// Make a copy of the state
			const children = [...numberOfChildren];
			// The child item
			const child = children[itemIndex];
			// Update the child's age
			children.splice(itemIndex, 1, { ...child, age: value });
			// Update the state
			updateNumberOfChildren(children);
		}
	}
	
	function deleteChild(id) {
		// Find the item in the array that has the same id
		// Convert the grabed id from string to Number
		const itemIndex = numberOfChildren.findIndex(
			item => item.id === Number(id)
		);
		console.log('ITEM INDEX', itemIndex);
		// Make a copy of the state
		const children = [...numberOfChildren];
		// remove the child from the array
		children.splice(itemIndex, 1);
		// Update the state
		updateNumberOfChildren(children);
	}
	function handleSubmit(e){
		e.preventDefault();
		router.push('/secondaryEducation')
	}
	async function handleClick(){
		document.getElementById('child-yes').classList.add('active_button')
		await updateHasChildren(true);
		dispatch({ type: "HAS_CHILDREN", hasChildren: true });
	}
	return (
		<React.Fragment>
			<CssBaseline />
			<Grid item xs={12} style={{margin:'10px auto'}}>
				<ProgressBar style={{height: '0.5rem'}} animated striped variant="info" label={`${now}% Done`} now={now} />
			</Grid>
			<Container maxWidth="sm" style={{marginTop:'40px'}}>
				<Grid container item justify="center" xs={12} sm={12} spacing={2}>
					<h4 className='header'>Do you have children?&nbsp;&nbsp;
						<QuestionCircle
							size={20}
							className="cursor-pointer"
							onClick={() => {setShowTitle(true)}}
						/>
					</h4>
				</Grid>
				<Grid container item justify="center" xs={12} sm={12} spacing={2}>
					<Grid item xs={12} sm={6} >
						<Button
							className="align-button"
							id="child-yes"
							onClick={async () => {handleClick()}}
							style={{ width: "100%" }}
							variant="contained"
							size="lg"
						>
							Yes
						</Button>
					</Grid>
					<Grid item xs={12} sm={6} >
						<Button
							className="align-button"
							onClick={() => {
								updateHasChildren(false);
								router.push('/dob')
							}}
							style={{ width: "100%" }}
							variant="contained"
							size="lg"
						>
							No
						</Button>
					</Grid>
				</Grid>
				{hasChildren === true && <>
				<Grid container item justify="center" xs={12} sm={12} spacing={2}>
					<Grid item xs={12} sm={12} >
						<h5 className="header">How old are your children?&nbsp;&nbsp;
							<QuestionCircle
								size={15}
								className="cursor-pointer"
								onClick={() => {setShowHowOld(true)}}
							/>
						</h5>
					</Grid>
						<Grid container item xs={12} sm={8} justify="center" spacing={2}>
							{numberOfChildren && numberOfChildren.map((child, index) => (
								<Grid item xs={12} sm={12} key={index}>
									{index === 0 ? <FormControl fullWidth>
											<InputLabel htmlFor="standard-adornment-amount">{`Child ${index+1} Age`}</InputLabel>
											<Input
												key={index + 60}
												className="col-sm-12 col-12"
												value={child.age}
												onChange={(e) => {
													updateData(e, index+1)
												}}
												type="number"
											/>
										</FormControl>
									: 
										<FormControl fullWidth >
											<InputLabel htmlFor="standard-adornment-amount">{`Child ${index+1} Age`}</InputLabel>
											<Input
												key={index + 60}
												className="col-sm-12 col-12"
												value={child.age}
												onChange={(e) => {
													updateData(e, index+1)
												}}
												type="number"
												endAdornment={<Trash
													size={30}
													className="col-sm-2 col-2 mt-3 cursor-pointer"
													onClick={(e) => { deleteChild(index+1);}}
												/>}
											/>
										</FormControl>
									}
								</Grid>
								))}
							</Grid>
						</Grid>
						<Grid container item justify="center" xs={12} sm={12} spacing={2} className="mt-4">
						<Grid item xs={12} sm={6} >
							<Button
								className="align-button"
								onClick={e => {
									e.preventDefault();
									updateNumberOfChildren([
										...numberOfChildren,
										{ id: numberOfChildren.length + 1, age: '' }
									]);
								}}
								style={{ width: "100%" }}
								variant="contained"
								type="submit"
								size="lg"
							>
								Add Additional Child
							</Button>
						</Grid>
					</Grid>
					</>}
				<Grid container item justify="center" xs={12} sm={12} className="mt-4">
					<p className="header font-weight-bold">Why do we ask about your children?&nbsp;&nbsp;
						<QuestionCircle
                            size={15}
                            className="cursor-pointer"
							onClick={() => {setShowAskAboutChildren(true)}}
						/>
					</p>
				</Grid>
				<Grid container item justify="center" xs={12} sm={12} className="mt-1">
					<p className="header font-weight-bold">What if I'm planning on having kids?&nbsp;&nbsp;
						<QuestionCircle
                            size={15}
                            className="cursor-pointer"
							onClick={() => {setShowPlanningOnKids(true)}}
						/>
					</p>
				</Grid>
				{hasChildren === true && (
					<Grid container item justify="center" xs={12} sm={12} spacing={2}>
						<Grid item xs={12} sm={6} >
							<Button
								style={{ width: "100%" }}
								onClick={(e)=>{handleSubmit(e)}}
								variant="contained"
								size="lg"
								disabled={isNext}
							>
								Next
							</Button>
						</Grid>
					</Grid>
					)}
					
			{/*title modal*/}
			<Modal show={showTitle} onHide={handleCloseTitle}>
				<Modal.Body>Select “Yes” if you have children or are currently expecting. Select “No” if you don’t have children or all of your children are out of your household and more or less financially independent.</Modal.Body>
				<Modal.Footer>
					<Button variant="contained" onClick={handleCloseTitle}>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
			{/*how odla re ur children modal*/}
			<Modal show={showHowOld} onHide={handleCloseHowOld}>
				<Modal.Body>Only include children who you are financially supporting (usually 25 and younger). Make sure to incorporate your children when we ask about your finances and expenses.</Modal.Body>
				<Modal.Footer>
					<Button variant="contained" onClick={handleCloseHowOld}>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
			{/*ask about children*/}
			<Modal show={showAskAboutChildren} onHide={handleCloseHowOld}>
				<Modal.Body>Life insurance is all about protecting the people you love. If there are people who rely on you for financial support, a life insurance policy will make sure they have enough money if something unexpected happens to you and your income is no longer there.</Modal.Body>
				<Modal.Footer>
					<Button variant="contained" onClick={handleCloseAskAboutChildren}>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
			{/*ask about children*/}
			<Modal show={showPlanningOnKids} onHide={handleClosePlanningOnKids}>
				<Modal.Body>If you’re expecting, first off, congratulations! You should include your expected child (or children if you’re having twins or triplets) and specify “0” when we ask for your children’s ages.

					However, if you’re merely planning on having children in the future, don’t include them. Until you are certain about if and when you’ll be having children, it’s best to not include them in your needs assessment to ensure you are not paying for coverage that you might not ultimately need.

					When your family does grow, we recommend revisiting the PolicyMe life insurance checkup to get updated advice and understand how your coverage needs may have changed.</Modal.Body>
				<Modal.Footer>
					<Button variant="contained" onClick={handleClosePlanningOnKids}>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
			</Container>
		</React.Fragment>
	);
}
