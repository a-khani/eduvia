#Python program to print topological sorting of a DAG
from collections import defaultdict

#Class to represent a graph
class Graph:
	def __init__(self,vertices):
		self.graph = defaultdict(list) #dictionary containing adjacency List
		self.V = vertices #No. of vertices

	# function to add an edge to graph
	def addEdge(self,u,v):
		self.graph[u].append(v)

	# neighbors generator given key
	def neighbor_gen(self,v):
		for k in self.graph[v]:
			yield k
	
	# non recursive topological sort
	def toposort_util(self, v, visited,stack):
		
		# working stack contains key and the corresponding current generator
		working_stack = [(v,self.neighbor_gen(v))]
		
		while working_stack:
			# get last element from stack
			v, gen = working_stack.pop()
			visited[v] = True
			
			# run through neighbor generator until it's empty
			for next_neighbor in gen:
				if not visited[next_neighbor]: # not seen before?
					# remember current work
					working_stack.append((v,gen))
					# restart with new neighbor
					working_stack.append((next_neighbor, self.neighbor_gen(next_neighbor)))
					break
			else:
				# no already-visited neighbor (or no more of them)
				stack.append(v)
				
	# The function to do Topological Sort.
	def toposort(self):
		# Mark all the vertices as not visited
		visited = [False] * self.V
		
		# result stack
		stack = []

		# Call the helper function to store Topological
		# Sort starting from all vertices one by one
		for i in range(self.V):
			if not(visited[i]):
				self.toposort_util(i, visited, stack)
		# Print contents of the stack in reverse
		stack.reverse()
		print(stack)

# g= Graph(6)
# g.addEdge(5, 2)
# g.addEdge(5, 0)
# g.addEdge(4, 0)
# g.addEdge(4, 1)
# g.addEdge(2, 3)
# g.addEdge(3, 1)

c = Graph(4)
c.addEdge("Math 1A", "Math 1B")
c.addEdge("Math 1B", "Math 53")
c.addEdge("Math 1B", "Math 54")

print("The following is a Topological Sort of the given graph")
# g.toposort()
c.toposort()
# This code was based of Neelam Yadav's code, modified by Suhail Alnahari, Python-ified by Matthias Urlichhs