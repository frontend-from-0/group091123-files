import {HeadingL} from './shared-components/typography/HeadingL';
import {RadioInput} from './shared-components/MultipleSelectionElement/RadioInput';
import {MultipleSelectionElement} from './shared-components/MultipleSelectionElement';
import {QuizData} from './data';

export const App = () => {
	return (
		<main>
			<div>
        <HeadingL title='Welcome to the' />
        <HeadingL title='Frontend Quiz!' bold />
				{/* <h1>
					Welcome to the <span className='text-bold'>Frontend Quiz!</span>
				</h1> */}
				<h4>Pick a subject to get started.</h4>
			</div>
			<MultipleSelectionElement>
        {QuizData.map(category => {
          <RadioInput name={category.categoryName.toLowerCase()} title={category.categoryName} inputGroupName='category'/>
        })}
        {/* <RadioInput name='html' title='HTML' inputGroupName='category'/>
        <RadioInput name='css' title='CSS' inputGroupName='category'/>
        <RadioInput name='javascript' title='Javascript' inputGroupName='category'/>
        <RadioInput name='accessibility' title='Accessibility' inputGroupName='category'/> */}
			</MultipleSelectionElement>
		</main>
	);
};
