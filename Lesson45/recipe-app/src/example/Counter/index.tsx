import { useReducer } from 'react';

interface Count {
	count: number;
}

enum CounterActionType {
	INCREMENT = 'increment',
	DECREMENT = 'decrement',
}

interface CounterAction {
	type: CounterActionType;
}

interface CounterProps {
	initialState?: Count;
}

// Reducer function that defines how the state changes
export function counterReducer(state: Count, action: CounterAction) {
	switch (action.type) {
		case CounterActionType.INCREMENT:
			return { count: state.count + 1 };
		case CounterActionType.DECREMENT:
			return { count: state.count - 1 };
		default:
			throw new Error();
	}
}


export const Counter = ({initialState}: CounterProps) => {
	const [state, dispatch] = useReducer(counterReducer, initialState ?? {count : 0});

	function handeIncrease () {
		dispatch({ type: CounterActionType.INCREMENT })
	};

	return (
		<>
			<h2 data-testid={'count-label'}>Count: </h2>
			<span data-testid={'count-value'}>{state.count}</span>
			
			<button data-testid={'increment-button'} onClick={ handeIncrease }>
				+
			</button>
			<button data-testid={'decrement-button'} onClick={() => dispatch({ type: CounterActionType.DECREMENT })}>
				-
			</button>
		</>
	);
};