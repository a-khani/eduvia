# credits to this Stackoverflow question for saving lives:
# https://stackoverflow.com/questions/47192626/deceptively-simple-implementation-of-topological-sorting-in-python

def toposort(graph, node):
    result = []
    seen = set()

    def recursive_helper(node):
        for neighbor in graph[node]:
            if neighbor not in seen:
                seen.add(neighbor)
                recursive_helper(neighbor)
        result.insert(0, node)              # this line replaces the result.append line

    recursive_helper(node)
    return result

# graph = {'A':['B','C'],'B':['D','E'],'C':['D','E'],'D':['E'],'E':['A']}
# print(toposort(graph, 'A'))

# courses = {
#         '54': ['1B'], 
#         '53': ['1B'],
#         '1B': ['1A'],
#         '1A': []
#         }
# print(toposort(courses, '54'))

berkeley_cs = {
    '189': ['70'],
    '182': ['61B', '70', '189'],
    '170': ['61B', '70'],
    '168': ['162', '61B'],
    '164': ['61B', '61C'],
    '162': ['61B', '61C', '70'],
    '161': ['61C', '70'],
    '70': [],
    '61C': ['61B'],
    '61B': ['61A'],
    '61A': []
}

course = input("Which class? \n")
result = []
for i in range(4):
    result.insert(0, toposort(berkeley_cs, course)[i])
print("CS " + course + ": " + (str)(result))