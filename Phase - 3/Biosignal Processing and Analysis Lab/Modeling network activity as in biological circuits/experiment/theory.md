Neurons or nerve cells are the fundamental units of the brain and nervous system. These specialized cells were designed to transmit information to other nerve cells, muscle, or gland cells. It receives sensory input from the external world and sending motor commands to our muscles, and also transforming the electrical signals for specific tasks and cognitive functions. Neurons were interconnected as wires that provide input signals to the neurons by dendrites and sometimes depending on the incoming signals, the neuron may fire and send a signal out for the other neurons to receive by axons. Each axon may be connected to one or more dendrites at intersections that are called synapses. The interconnected biological neuron system results action from simple to extremely complex mechanisms and it forms biological neural networks. The behavior of the system is determined by the ways in which the neurons are wired together. Each neuron reacts to the incoming signals in a specific way that can also adapt over time. This adaptation is known to be the key to functions such as memory and learning.

&nbsp;
**Neural Networks (NN) or Artificial neural network (ANN)**
&nbsp;

A neural network or artificial Neural networks or simulated neural network (SNN) consists of a large number of simple units, neurons, that receive and transmit signals to each other. The neurons are very simple processors of information, consisting of a cell body and wires that connect the neurons to each other. Neural Networks are the most well-regarded and widely used machine learning techniques. Artificial Intelligence and Data Science were the focus area of machine learning techniques. The data scientist uses the neural networks to learn about the internal structure and functions of brain and to understand the neural mechanisms underlying various cognitive functions.

Artificial neural networks (ANNs) are comprised of a node layers, containing an input layer, one or more hidden layers, and an output layer. Each node, or artificial neuron, connects to another and has an associated weight and threshold. If the output of any individual node is above the specified threshold value, that node is activated, sending data to the next layer of the network. Otherwise, no data is passed along to the next layer of the network.

Neural network is a series of algorithms that helps to recognize underlying relationships in a set of data through a process that mimics the way the human brain operates. In this sense, neural networks refer to systems of neurons, either organic or artificial in nature. Neural networks can adapt to changing input; so the network generates the best possible result without needing to redesign the output criteria (Fig.1)
A layer in a neural network consists of a parameterizable number of neurons. A neural network consists of multiple layers. A neuron consists of a function f(x1, x2, ..., xn), a sigmoid function which uses f as input and gives a binary output and a weight factor which is multiplied with the sigmoid function and determines how much this neuron is considered for the output of the layer.

The neural network function, f(x1,x2,…,xn)f(x1,x2,…,xn) is often just a weighted sum:

&nbsp;
<center><img src="images/ntwrk1.png" title="" /></center>

&nbsp;
Each neuron has a weight vector w=(w1,w2,...,wn)w=(w1,w2,...,wn), where nn is the number of inputs to that neuron. These inputs can be either the 'raw' input features like temperature, precipitation, and wind speed for a weather model or the output of neurons from an earlier layer.The weights for each neuron are turned and the final network output is biased toward some value (usually 1) for signal, and another (usually -1 or 0) for background. Non-linear behavior in a neural network is accomplished by use of an activation function (often a sigmoid function) to which the output of ff is passed and modified. This allows neural networks to describe more complicated systems while still combining inputs in a simple fashion.

&nbsp;
<center><img src="images/ntwrk2.png" title="" /></center>
Fig.1: A simple Neuron Network model

&nbsp;

***• Input Layer Neurons*** receive the input information (usually numeric representations of text, image, audio and others types of data), process it through a mathematical function (activation function) and "send" an output to the next layer's neurons based in conditions. On the way to other layer's neurons, that data is multiplied by preset weights (placed in the graphical lines linking one neuron to the others).

***•	Hidden layer neurons*** receive inputs from the input layers or by the previous hidden layer, pass them through new functions and send the result to the next layer neurons. Again, the data here is typically multiplied by weights on the way.

***•	Output layer neurons*** receive inputs from previous layers, process them through new functions and outputs the expected results. The results could be simple binary classifications (0 or 1, yes or no, black or white, dog or not dog), multiple choice classifications (e.i.: cat, dog or wolf), numeric predictions, matrices and so on. Depending on the type of Artificial Neural Network, this output could be used as a final result, or as an output to a new loop over the same or another neural net.
An artificial neuron may only pass an output signal on to the next layer if its inputs (which are actually voltages) sum to a value above some particular threshold value. Because activation functions can either be linear or non-linear, neurons will often have a wide range of convergence and divergence. Divergence is the ability for one neuron to communicate with many other neurons in the network and convergence is the ability for one neuron to receive input from many other neurons in the network. 
Neural networks rely on training data to learn and improve their accuracy over time. However, once these learning algorithms are fine-tuned for accuracy, they are powerful tools in computer science and artificial intelligence, allowing us to classify and cluster data at a high velocity. Tasks in speech recognition or image recognition can take minutes versus hours when compared to the manual identification by human experts. One of the most well-known neural networks is Google’s search algorithm.

&nbsp;
**Application of Artificial neural networks:** ANN and AI (Artificial intelligence) were applied in many   disciplines. Application areas include system identification and control (vehicle control, trajectory prediction, process control, natural resource management), quantum chemistry, general game playing ,pattern recognition (radar systems, face identification, signal classification,3D reconstruction, object recognition and more), sequence recognition (gesture, speech, handwritten and printed text recognition), medical diagnosis, finance (e.g. automated trading systems), data mining, visualization, machine translation, social network filtering and e-mail spam filtering. ANNs have been used to diagnose several types of cancers and to distinguish highly invasive cancer cell lines from less invasive lines using only cell shape information
 
 &nbsp;
 **Modeling Biological Network connectivity using AdeX Model**
 
The biological neurons networks were mathematically represented and emulated by Adaptive exponential integrate-and-fire neuron model (AdEx). The AdEx model produce complex firing patterns observed in biology like spike-frequency-adaptation, bursting, regular spiking, irregular spiking and transient spiking by tuning a limited number of parameters. The model can be described by two differential equations for the membrane voltage V and the adaptation variable w:

&nbsp;
<center><img src="images/ntwrk3.png" title="" /></center>
&nbsp;

Cm, gl , ge and gi are the membrane capacitance, the leakage conductance and the conductance for excitatory and inhibitory synaptic inputs, where ge and gi depend on time and the inputs from other neurons. El , Ei and Ee are the leakage reversal potential and the synaptic reversal potentials. The parameters Vt and ∆t are the effective threshold potential and the threshold slope factor. The time constant of the adaptation variable is τw and a is called adaptation parameter. It has the dimension of a conductance. If the membrane voltage crosses a certain threshold voltage Θ, the neuron is reset:
&nbsp;
<center><img src="images/ntwrk4.png" title="" /></center>
&nbsp;
The parameter b is responsible for spike-triggered adaptation. Due to the sharp rise, created by the exponential term in equation 1, the exact value of Θ is not critical for the determination of the moment of a spike
The single compartment AdEx model can reproduce electrophysiological features like spike-frequency adaptation ,regular and fast spiking, phasic spiking ,phasic and tonic bursting, post-inhibitory spiking and bursting, delayed spike initiation and delayed burst initiation, damped oscillations, overshoot or undershoot of the voltage in response to a subthreshold current step , type I and type II excitability(Fig.2)

&nbsp;
<center><img src="images/ntwrk5.png" title="" /></center>
Fig 2: Firing patterns of biological neurons using AdeX Model&nbsp;
&nbsp;


